import { Fisical } from "../person/fisical";
import { Client } from "../client/client";
import { Account } from "../account/account";

export class ClientFisical extends Client{
    fisical: Fisical;
    constructor(clientID:number, managerId: number, accounts: Account[], fisical: Fisical){
        super(clientID, managerId, accounts);
        this.fisical = fisical;
    }
}