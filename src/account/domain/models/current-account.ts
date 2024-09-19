import { AccountType } from "../../../commom/types/account.type";
import { Account } from "./account"

export class CurrentAccount extends Account{
    constructor(
        public agency: number,
        public ID: number,
        public balance:number, 
        public clientID: number
    ){
        super(ID,balance,clientID,AccountType.checking);
        this.agency = agency;
    } 
}
