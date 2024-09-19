import { Account } from "../account/account";
export declare class Client {
    ID: number;
    managerID: number;
    accounts: Account[];
    constructor(ID: number, managerID: number, accounts: Account[]);
}
