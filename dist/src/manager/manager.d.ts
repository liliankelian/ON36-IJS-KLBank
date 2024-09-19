import { Client } from "../client/client";
import { Fisical } from "../person/fisical";
export declare class Manager extends Fisical {
    ID: number;
    clients: Client[];
    constructor(ID: number, CPF: string, RG: string, birthDate: Date, fullName: string, email: string, address: string, phone: string, clients: Client[]);
}
