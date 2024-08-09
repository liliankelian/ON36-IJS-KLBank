import { Cliente } from "./Cliente";

class Gerente {
    ID:number;
    fullName:string;
    clients: Cliente[];
    accounts: ContaBancaria[];
    
    constructor(ID:number, fullName:string){
        this.ID = ID;
        this.fullName = fullName;
        this.clients = [];
        this.accounts = [];
    }
}