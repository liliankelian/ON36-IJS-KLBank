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
exports.SavingsAccountService = void 0;
const common_1 = require("@nestjs/common");
const savings_account_1 = require("./savings-account");
const savings_account_repository_1 = require("../_repositories/savings-account.repository");
const client_service_1 = require("../client/client.service");
let SavingsAccountService = class SavingsAccountService {
    constructor(savingsRepository, clientService) {
        this.savingsRepository = savingsRepository;
        this.clientService = clientService;
    }
    create(clientID, balance, rate, isManager) {
        if (!isManager) {
            throw new common_1.NotFoundException(`Somente gerente tem acesso a criar uma conta`);
        }
        const client = this.clientService.findById(clientID);
        if (!client) {
            throw new common_1.NotFoundException(`Cliente com o ID ${clientID} não foi encontrado`);
        }
        const savings = this.savingsRepository.readSavingsAccount();
        const newSaving = new savings_account_1.SavingsAccount(savings.length > 0 ? savings[savings.length - 1].ID + 1 : 1, clientID, balance, rate);
        savings.push(newSaving);
        this.savingsRepository.writeSavingsAccount(savings);
        this.clientService.addAccountToClient(clientID, newSaving);
        return newSaving;
    }
    findById(id) {
        const savings = this.savingsRepository.readSavingsAccount();
        const saving = savings.find(saving => saving.ID === id);
        if (!saving) {
            console.log(`Poupança com o ID ${id} não encontrado`);
        }
        return saving;
    }
    findAll() {
        return this.savingsRepository.readSavingsAccount();
    }
    updateBalance(id, balance) {
        const savings = this.savingsRepository.readSavingsAccount();
        const saving = savings.find(saving => saving.ID === id);
        saving.balance = balance;
        this.savingsRepository.writeSavingsAccount(savings);
        return saving;
    }
    remove(id) {
        const savings = this.savingsRepository.readSavingsAccount();
        const savingIndex = savings.findIndex(saving => saving.ID === id);
        savings.splice(savingIndex, 1);
        this.savingsRepository.writeSavingsAccount(savings);
    }
};
exports.SavingsAccountService = SavingsAccountService;
exports.SavingsAccountService = SavingsAccountService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [savings_account_repository_1.SavingsAccountRepository,
        client_service_1.ClientService])
], SavingsAccountService);
//# sourceMappingURL=savings-account.service.js.map