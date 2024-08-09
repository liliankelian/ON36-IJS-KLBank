import { Account } from "src/account/account";
import { AccountType } from "src/account/account.type";

export class CheckingAccount extends Account {
    limit:number;
 
    constructor(ID: number, balance: number,clientID: number, limit:number){
        const type = AccountType.checking
        super(ID, balance, clientID, type);
        this.limit = limit;
    }
}
