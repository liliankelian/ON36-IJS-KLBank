import { Account } from "../account/account";
import { AccountType } from "../account/account.type";

export class CheckingAccount extends Account {
    limit:number;
 
    constructor(ID: number, balance: number,clientID: number, limit:number){
        const type = AccountType.checking
        super(ID, balance, clientID, type);
        this.limit = limit;
    }
}
