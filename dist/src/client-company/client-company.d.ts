import { Company } from "../person/company";
import { Client } from "../client/client";
import { Account } from "src/account/account";
export declare class ClientCompany extends Client {
    company: Company;
    constructor(clientID: number, managerId: number, accounts: Account[], company: Company);
}
