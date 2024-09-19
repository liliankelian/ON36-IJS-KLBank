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
exports.AccountFactory = void 0;
const common_1 = require("@nestjs/common");
const savings_account_1 = require("../savings-account/savings-account");
const account_type_1 = require("./account.type");
const checking_account_1 = require("../checking-account/checking-account");
let AccountFactory = class AccountFactory {
    constructor() { }
    createAccount(type, ID, clientID) {
        const defaultBalance = 0;
        switch (type) {
            case account_type_1.AccountType.savings:
                const defaultRate = 0.2;
                return new savings_account_1.SavingsAccount(ID, defaultBalance, clientID, defaultRate);
            case account_type_1.AccountType.checking:
                const defaultLimit = 500;
                return new checking_account_1.CheckingAccount(ID, defaultBalance, clientID, defaultLimit);
            default:
                throw new Error('Invalid account type');
        }
    }
};
exports.AccountFactory = AccountFactory;
exports.AccountFactory = AccountFactory = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], AccountFactory);
//# sourceMappingURL=account.factory.js.map