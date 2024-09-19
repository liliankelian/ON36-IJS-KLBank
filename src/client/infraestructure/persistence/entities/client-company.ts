import { Company } from "./person/company";
import { Client } from "../entity/client";
import { Account } from "src/account/account";

export class ClientCompany extends Client{
    company:Company;
    constructor(clientID:number, managerId: number, accounts: Account[], company:Company){
        super(clientID, managerId, accounts);
        this.company = company;
    }
}