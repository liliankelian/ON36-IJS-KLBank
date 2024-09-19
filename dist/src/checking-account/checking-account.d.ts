import { Account } from "../account/account";
export declare class CheckingAccount extends Account {
    limit: number;
    constructor(ID: number, balance: number, clientID: number, limit: number);
}
