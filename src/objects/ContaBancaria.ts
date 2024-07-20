abstract class ContaBancaria {
    saldo: number;

    abstract sacar(valor: number): void;
    abstract depositar(valor: number): void;
    abstract transferir(valor: number, conta: ContaBancaria): void;
    abstract consultarSaldo(): number;
    abstract consultarExtrato(): void;
    abstract gerarExtrato(): void;
    

}

class Poupanca extends ContaBancaria {

}

class Corrente extends ContaBancaria {

}