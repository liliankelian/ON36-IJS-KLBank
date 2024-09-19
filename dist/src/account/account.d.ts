import { AccountType } from "./account.type";
export declare class Account {
    ID: number;
    balance: number;
    clientID: number;
    type: AccountType;
    constructor(ID: number, balance: number, clientID: number, type: AccountType);
}
