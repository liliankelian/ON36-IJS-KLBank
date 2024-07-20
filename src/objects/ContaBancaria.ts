abstract class ContaBancaria {
    numero: number;
    agencia: number;
    saldo: number;

    depositar(valor: number): void {
        this.saldo += valor;
    };
    consultarSaldo(): number{
        return this.saldo;
    };

    abstract sacar(valor: number): void;
    abstract transferir(valor: number, conta: ContaBancaria): void;
 
    //abstract consultarExtrato(): void;
    //abstract gerarExtrato(): void;
   
}

class Poupanca extends ContaBancaria {
    juros:number;
    
    constructor(juros:number){
        super();
        this.juros = juros;
    } 
    
    sacar(valor: number): void {
        if(this.saldo < valor){
            console.log("Saldo insuficiente");
            return;
        }   
        this.saldo -= valor;
    }

    transferir(valor: number, conta: ContaBancaria): void {
        if(this.saldo < valor){
            console.log("Saldo insuficiente");
            return;
        }   
        this.saldo -= valor;
        conta.depositar(valor);
    
    }
}

class Corrente extends ContaBancaria {
    limite:number;
 
    constructor(limite:number){
        super();
        this.limite = limite;
    }
    sacar(valor: number): void {
        if(this.saldo + this.limite < valor){
            console.log("Saldo insuficiente");
            return;
        }   
        this.saldo -= valor;
    }
    transferir(valor: number, conta: ContaBancaria): void {
        if(this.saldo + this.limite < valor){
            console.log("Saldo insuficiente");
            return;
        }   
        this.saldo -= valor;
        conta.depositar(valor);
    }
}