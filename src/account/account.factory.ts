import { Injectable } from "@nestjs/common";
import { Account } from "./account";
import { SavingsAccount } from "../savings-account/savings-account";
import { AccountType } from "./account.type";
import { CheckingAccount } from "../checking-account/checking-account";

@Injectable()
export class AccountFactory{

    constructor(){}

    createAccount(
        type: AccountType,
        ID: number,
        clientID:number
    ):Account{
        const defaultBalance = 0
        switch (type) {
            case AccountType.savings: 
                const defaultRate = 0.2
                return new SavingsAccount(ID,defaultBalance,clientID,defaultRate)
            case AccountType.checking: 
                const defaultLimit = 500
                return new CheckingAccount(ID,defaultBalance,clientID,defaultLimit)
            default:
                throw new Error('Invalid account type');
        }
    }
}