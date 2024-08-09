import { Injectable } from "@nestjs/common";
import { Account } from "./account";
import { SavingsAccount } from "src/savings-account/savings-account";
import { SavingsAccountService } from "src/savings-account/savings-account.service";
import { CheckingAccountService } from "src/checking-account/checking-account.service";
import { AccountType } from "./account.type";
import { CheckingAccount } from "src/checking-account/checking-account";

@Injectable()
export class AccountFactory{
    constructor(
        private readonly savingsService: SavingsAccountService,
        private readonly checkingService: CheckingAccountService

    ){}
    createAccount(
        type: AccountType,
        ID: number,
        clientID:number, 
        balance:number,
        rate?:number,
        limit?:number
    ):Account{
        switch (type) {
            case AccountType.savings: 
                return new SavingsAccount(ID,balance,clientID,rate)
            case AccountType.checking: 
                return new CheckingAccount(ID,balance,clientID,limit)
            default:
                throw new Error('Invalid account type');
        }
    }
}