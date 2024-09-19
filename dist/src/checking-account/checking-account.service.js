"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckingAccountService = void 0;
const common_1 = require("@nestjs/common");
const checking_account_repository_1 = require("../_repositories/checking-account.repository");
const client_service_1 = require("../client/client.service");
const checking_account_1 = require("./checking-account");
let CheckingAccountService = class CheckingAccountService {
    constructor(checkingRepository, clientService) {
        this.checkingRepository = checkingRepository;
        this.clientService = clientService;
    }
    create(clientID, balance, limit, isManager) {
        if (!isManager) {
            throw new common_1.NotFoundException(`Somente gerente tem acesso a criar uma conta`);
        }
        const client = this.clientService.findById(clientID);
        if (!client) {
            throw new common_1.NotFoundException(`Cliente com o ID ${clientID} não foi encontrado`);
        }
        const checkings = this.checkingRepository.readCheckingAccount();
        const newChecking = new checking_account_1.CheckingAccount(checkings.length > 0 ? checkings[checkings.length - 1].ID + 1 : 1, clientID, balance, limit);
        checkings.push(newChecking);
        this.checkingRepository.writeCheckingAccount(checkings);
        this.clientService.addAccountToClient(clientID, newChecking);
        return newChecking;
    }
    remove(id) {
        const checkings = this.checkingRepository.readCheckingAccount();
        const checkingsFilter = checkings.filter(checking => checking.ID !== id);
        this.checkingRepository.writeCheckingAccount(checkingsFilter);
    }
};
exports.CheckingAccountService = CheckingAccountService;
exports.CheckingAccountService = CheckingAccountService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [checking_account_repository_1.CheckingAccountRepository,
        client_service_1.ClientService])
], CheckingAccountService);
//# sourceMappingURL=checking-account.service.js.map