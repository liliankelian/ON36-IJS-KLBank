declare abstract class ContaBancaria {
    ID: number;
    agency: number;
    balance: number;
}
declare class Poupanca extends ContaBancaria {
    rate: number;
    constructor(rate: number);
}
declare class Corrente extends ContaBancaria {
    limit: number;
    constructor(limit: number);
}
