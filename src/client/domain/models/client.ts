import { Account } from "../../../account/domain/models/account";

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

