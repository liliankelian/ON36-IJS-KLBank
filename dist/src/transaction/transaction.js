"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transaction = void 0;
class Transaction {
    constructor(ID, accountID, amount, type, date) {
        this.ID = ID;
        this.accountID = accountID;
        this.amount = amount;
        this.type = type;
        this.date = date;
    }
}
exports.Transaction = Transaction;
//# sourceMappingURL=transaction.js.map