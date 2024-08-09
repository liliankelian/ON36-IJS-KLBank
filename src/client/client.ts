import { Fisical } from "src/person/fisical"
import { Company } from "src/person/company"
import { Account } from "src/account/account";
import { Manager } from "src/manager/manager";

export class Client {
    ID:number;
    managerID:number;
    accounts: Account[];
    
    constructor(ID:number, managerID:number, accounts: Account[] ){
        this.ID = ID;
        this.managerID = managerID;
        this.accounts = accounts;
    }
}

