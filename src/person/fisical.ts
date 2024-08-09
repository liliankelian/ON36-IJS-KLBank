import { Person } from "./person";

export class Fisical extends Person{
    CPF:string;
    RG:string;
    birthDate:Date;
    constructor(CPF:string, RG:string, birthDate:Date, fullName:string, email:string, address:string, phone:string){
        super(fullName, email, address, phone)
        this.CPF = CPF;
        this.RG = RG;
        this.birthDate = birthDate;
    }
}