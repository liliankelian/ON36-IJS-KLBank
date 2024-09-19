import { AccountType } from "../../../commom/types/account.type";

export class CreateAccount {
    constructor(
        public readonly ID: number, 
        public readonly balance:number, 
        public readonly clientID: number,
        public readonly type: AccountType
    ){
       }
}