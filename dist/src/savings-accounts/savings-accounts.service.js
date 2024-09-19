"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SavingsAccountsService = void 0;
const common_1 = require("@nestjs/common");
const path = require("path");
const fs = require("fs");
let SavingsAccountsService = class SavingsAccountsService {
    constructor() {
        this.filepath = path.resolve('src/db/json/savings-accounts.json');
    }
    readAccounts() {
        const data = fs.readFileSync(this.filepath, 'utf8');
        return JSON.parse(data);
    }
    writeAccounts(accounts) {
        fs.writeFileSync(this.filepath, JSON.stringify(accounts, null, 2), 'utf8');
    }
    deposit(value, account) {
        account.balance += value;
        return account;
    }
    ;
    checkBalance(account) {
        return account.balance;
    }
    ;
    withdraw(value, ID) {
        const accounts = this.readAccounts();
        const account = accounts.find(account => account.ID === Number(ID));
        if (!account) {
            console.log(`Account with id ${ID} not found`);
            return;
        }
        if (account.balance < value) {
            console.log("Saldo insuficiente");
            return;
        }
        account.balance -= value;
        return account;
    }
    transfer(value, IDsender, IDrecipient) {
        const accounts = this.readAccounts();
        const sender = accounts.find(account => account.ID === Number(IDsender));
        const recipient = accounts.find(account => account.ID === Number(IDrecipient));
        if (!sender) {
            console.log(`Account with id ${IDsender} not found`);
            return;
        }
        if (!recipient) {
            console.log(`Account with id ${IDrecipient} not found`);
            return;
        }
        if (sender.balance < value) {
            console.log("Saldo insuficiente");
            return;
        }
        sender.balance -= value;
        this.deposit(value, recipient);
        return sender;
    }
};
exports.SavingsAccountsService = SavingsAccountsService;
exports.SavingsAccountsService = SavingsAccountsService = __decorate([
    (0, common_1.Injectable)()
], SavingsAccountsService);
//# sourceMappingURL=savings-accounts.service.js.map