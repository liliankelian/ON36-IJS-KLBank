import { Account } from "../account/account";
import { AccountType } from "../account/account.type";

export class SavingsAccount extends Account{
    rate:number;
        
    constructor(ID: number, balance: number, clientID: number, rate:number){
        const type = AccountType.savings
        super(ID, balance,clientID, type);
        this.rate = rate;
    } 
}
