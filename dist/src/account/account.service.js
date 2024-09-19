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
exports.AccountService = void 0;
const common_1 = require("@nestjs/common");
const account_repository_1 = require("../_repositories/account.repository");
const account_factory_1 = require("./account.factory");
let AccountService = class AccountService {
    constructor(accountRepository, accountFactory) {
        this.accountRepository = accountRepository;
        this.accountFactory = accountFactory;
        const accounts = this.accountRepository.readAccount();
        this.idCounter = accounts.length > 0 ? accounts[accounts.length - 1].ID + 1 : 1;
    }
    createAccount(type, clientID, isManager) {
        const accounts = this.accountRepository.readAccount();
        if (!isManager) {
            throw new common_1.NotFoundException('Somente o gerente pode abrir uma conta');
        }
        const newAccount = this.accountFactory.createAccount(type, this.idCounter, clientID);
        accounts.push(newAccount);
        this.accountRepository.writeAccount(accounts);
        return newAccount;
    }
};
exports.AccountService = AccountService;
exports.AccountService = AccountService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [account_repository_1.AccountRepository,
        account_factory_1.AccountFactory])
], AccountService);
//# sourceMappingURL=account.service.js.map