import { AccountType } from "../../../../commom/types/account.type";
import { Account } from "./account";

export class SavingsAccount extends Account{
   
        public rate:number;
        public ID: number;
        public balance:number; 
        public clientID: number;
        public type: AccountType.checking
    
}
