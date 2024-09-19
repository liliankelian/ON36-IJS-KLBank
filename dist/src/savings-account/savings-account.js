"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SavingsAccount = void 0;
const account_1 = require("../account/account");
const account_type_1 = require("../account/account.type");
class SavingsAccount extends account_1.Account {
    constructor(ID, balance, clientID, rate) {
        const type = account_type_1.AccountType.savings;
        super(ID, balance, clientID, type);
        this.rate = rate;
    }
}
exports.SavingsAccount = SavingsAccount;
//# sourceMappingURL=savings-account.js.map