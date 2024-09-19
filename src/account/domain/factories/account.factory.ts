import { Injectable } from "@nestjs/common";
import { Account } from "../models/account";
import { SavingsAccount } from "../models/savings-account";
import { AccountType } from "../../../commom/types/account.type";
import { CheckingAccount } from "../models/checking-account"
import { CurrentAccount } from "../models/current-account";

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
            case AccountType.current: 
                const defaultAgency = 500
                return new CurrentAccount(defaultAgency,ID,defaultBalance,clientID)
            default:
                throw new Error('Invalid account type');
        }
    }
}