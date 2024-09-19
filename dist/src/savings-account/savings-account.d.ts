import { Account } from "../account/account";
export declare class SavingsAccount extends Account {
    rate: number;
    constructor(ID: number, balance: number, clientID: number, rate: number);
}
