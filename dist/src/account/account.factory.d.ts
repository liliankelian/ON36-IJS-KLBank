import { Account } from "./account";
import { AccountType } from "./account.type";
export declare class AccountFactory {
    constructor();
    createAccount(type: AccountType, ID: number, clientID: number): Account;
}
