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
exports.TransactionService = void 0;
const common_1 = require("@nestjs/common");
const transaction_repository_1 = require("../_repositories/transaction.repository");
const savings_account_service_1 = require("../savings-account/savings-account.service");
let TransactionService = class TransactionService {
    constructor(transactionRepository, accountService) {
        this.transactionRepository = transactionRepository;
        this.accountService = accountService;
        const transactions = this.transactionRepository.readTransaction();
        this.idCounter = transactions.length > 0 ? transactions[transactions.length - 1].ID + 1 : 1;
    }
    create(accountID, amount, type) {
        const account = this.accountService.findById(accountID);
        if (!account) {
            throw new common_1.NotFoundException(`Conta não encontrado ${accountID}`);
        }
        const newTransaction = {
            ID: this.idCounter++,
            accountID,
            amount,
            type,
            date: new Date()
        };
        const transactions = this.transactionRepository.readTransaction();
        transactions.push(newTransaction);
        this.transactionRepository.writeTransaction(transactions);
        return newTransaction;
    }
    findById(id) {
        const transactions = this.transactionRepository.readTransaction();
        const transaction = transactions.find(transaction => transaction.ID === id);
        if (!transaction) {
            console.log(`Poupança com o ID ${id} não encontrado`);
        }
        return transaction;
    }
    findAll() {
        return this.transactionRepository.readTransaction();
    }
    findByAccountID(accountID) {
        const account = this.accountService.findById(accountID);
        if (!account) {
            throw new common_1.NotFoundException(`Conta não encontrado ${accountID}`);
        }
        const transactions = this.transactionRepository.readTransaction();
        const transactionsFilter = transactions.filter(transaction => transaction.accountID === accountID);
        return transactionsFilter;
    }
    updateAmount(id, amount) {
        const transactions = this.transactionRepository.readTransaction();
        const transaction = transactions.find(transaction => transaction.ID === id);
        if (!transaction) {
            throw new common_1.NotFoundException(`Conta não encontrado ${id}`);
        }
        transaction.amount = amount;
        this.transactionRepository.writeTransaction(transactions);
        return transaction;
    }
    remove(id) {
        const transactions = this.transactionRepository.readTransaction();
        const transactionIndex = transactions.findIndex(transaction => transaction.ID === id);
        transactions.splice(transactionIndex, 1);
        this.transactionRepository.writeTransaction(transactions);
    }
};
exports.TransactionService = TransactionService;
exports.TransactionService = TransactionService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [transaction_repository_1.TransactionRepository,
        savings_account_service_1.SavingsAccountService])
], TransactionService);
//# sourceMappingURL=transaction.service.js.map