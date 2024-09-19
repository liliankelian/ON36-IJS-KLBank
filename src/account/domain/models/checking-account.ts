import { AccountType } from "../../../commom/types/account.type";
import { Account } from "./account"

export class CheckingAccount extends Account {
    constructor(
        public ID: number,
        public balance:number, 
        public clientID: number,
        public limit:number,
    ){
        super(ID,balance,clientID,AccountType.checking);
        this.limit = limit;
    }
 }
