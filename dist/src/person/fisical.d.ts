import { Person } from "./person";
export declare class Fisical extends Person {
    CPF: string;
    RG: string;
    birthDate: Date;
    constructor(CPF: string, RG: string, birthDate: Date, fullName: string, email: string, address: string, phone: string);
}
