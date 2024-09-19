import { Fisical } from "../../../commom/models/person/fisical";
import { Client } from "./client";
import { Account } from "../../../account/domain/models/account";

export class ClientFisical extends Client{
    fisical: Fisical;
    constructor(clientID:number, managerId: number, accounts: Account[], fisical: Fisical){
        super(clientID, managerId, accounts);
        this.fisical = fisical;
    }
}