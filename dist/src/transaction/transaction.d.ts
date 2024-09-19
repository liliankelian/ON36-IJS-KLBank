import { TransactionType } from "./transaction.type";
export declare class Transaction {
    ID: number;
    accountID: number;
    amount: number;
    type: TransactionType;
    date: Date;
    constructor(ID: number, accountID: number, amount: number, type: TransactionType, date: Date);
}
