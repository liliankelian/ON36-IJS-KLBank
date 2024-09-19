"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckingAccount = void 0;
const account_1 = require("../account/account");
const account_type_1 = require("../account/account.type");
class CheckingAccount extends account_1.Account {
    constructor(ID, balance, clientID, limit) {
        const type = account_type_1.AccountType.checking;
        super(ID, balance, clientID, type);
        this.limit = limit;
    }
}
exports.CheckingAccount = CheckingAccount;
//# sourceMappingURL=checking-account.js.map