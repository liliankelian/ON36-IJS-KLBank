import { AccountType } from "../../../../commom/types/account.type"
import { Account } from "./account"

export class CheckingAccount extends Account {
        public limit:number;
        public ID: number;
        public balance:number;
        public clientID: number;
        public type: AccountType.checking

 }
