import { AccountType } from "../../../commom/types/account.type";

export class ModifyAccount {
    constructor(
        public readonly ID: number, 
        public readonly type: AccountType
    ){
       }
}