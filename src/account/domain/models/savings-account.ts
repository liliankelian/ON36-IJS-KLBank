import { AccountType } from "../../../commom/types/account.type";
import { Account } from "./account";

export class SavingsAccount extends Account{
    
    constructor(
        public ID: number,
        public balance:number, 
        public clientID: number,
        public rate:number,
        
    ){
        super(ID,balance,clientID,AccountType.checking);
        this.rate = rate;
    } 
}
