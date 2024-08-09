import { Person } from "./person";

export class Company extends Person{
    CNPJ:string;
    razaoSocial:string;
    constructor(CNPJ:string, razaoSocial:string, fullName:string, email:string, address:string, phone:string){
        super(fullName, email, address, phone)
        this.CNPJ = CNPJ;
        this.razaoSocial = razaoSocial;
    }
}