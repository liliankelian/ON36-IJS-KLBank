import { Company } from "../../../commom/models/person/company";
import { Client } from "./client";
import { Account } from "../../../account/domain/models/account";

export class ClientCompany extends Client{
    company:Company;
    constructor(clientID:number, managerId: number, accounts: Account[], company:Company){
        super(clientID, managerId, accounts);
        this.company = company;
    }
}