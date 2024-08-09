abstract class ContaBancaria {
    ID: number;
    agency: number;
    balance: number;  
}

class Poupanca extends ContaBancaria {
    rate:number;
    
    constructor(rate:number){
        super();
        this.rate = rate;
    } 
    
}

class Corrente extends ContaBancaria {
    limit:number;
 
    constructor(limit:number){
        super();
        this.limit = limit;
    }
    
}