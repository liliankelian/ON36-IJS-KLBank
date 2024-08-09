import { TransactionType } from "./transaction.type";

export class Transaction {
    constructor(
        public ID:number,
        public accountID:number,
        public amount:number,
        public type: TransactionType,
        public date: Date
    ){}
}
