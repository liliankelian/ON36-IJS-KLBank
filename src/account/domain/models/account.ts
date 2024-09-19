import { AccountType } from "../../../commom/types/account.type";

export class Account {
    constructor(
        public ID: number, 
        public balance:number, 
        public clientID: number,
        public type: AccountType
    ){
       }
}