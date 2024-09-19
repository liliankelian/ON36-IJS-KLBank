export declare class Cliente {
    ID: number;
    nomeCompleto: string;
    email: string;
    endereco: string;
    telefone: string;
    constructor(ID: number, nomeCompleto: string, email: string, endereco: string, telefone: string);
}
export declare class Fisica {
    CPF: string;
    RG: string;
    dataNascimento: string;
    constructor(CPF: string, RG: string, dataNascimento: string);
}
export declare class Juridica {
    CNPJ: string;
    razaoSocial: string;
    constructor(CNPJ: string, razaoSocial: string);
}
