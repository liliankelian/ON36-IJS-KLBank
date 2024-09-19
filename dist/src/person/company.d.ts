import { Person } from "./person";
export declare class Company extends Person {
    CNPJ: string;
    razaoSocial: string;
    constructor(CNPJ: string, razaoSocial: string, fullName: string, email: string, address: string, phone: string);
}
