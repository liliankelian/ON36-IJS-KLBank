import { AccountType } from "../../../../commom/types/account.type";
import { Account } from "./account"

export class CurrentAccount extends Account{
  
        public agency: number;
        public ID: number;
        public balance:number; 
        public clientID: number;
        public type: AccountType.checking;
   
}
