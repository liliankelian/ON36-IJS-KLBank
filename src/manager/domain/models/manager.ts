import { Client } from "../../../client/infraestructure/persistence/entities/client";
import { Fisical } from "./person/fisical";

export class Manager extends Fisical {
    ID:number
    clients: Client[];
    constructor(
        ID: number,
        CPF: string, 
        RG: string, 
        birthDate: Date, 
        fullName: string, 
        email: string, 
        address: string, 
        phone: string, 
        clients: Client[]
        )
        {
            super(
                CPF, 
                RG, 
                birthDate, 
                fullName, 
                email, 
                address, 
                phone, 
            );
            this.ID = ID;
            this.clients = clients;
        }
}
