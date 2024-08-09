export class Cliente{
    ID:number;
    nomeCompleto:string;
    email:string;
    endereco:string;
    telefone:string; 
    
    constructor(ID:number, nomeCompleto:string, email:string, endereco:string, telefone:string){
        this.ID = ID;
        this.nomeCompleto = nomeCompleto;
        this.email = email;
        this.endereco = endereco;
        this.telefone = telefone;
    }
}

export class Fisica{
    CPF:string;
    RG:string;
    dataNascimento:string;
    constructor(CPF:string, RG:string, dataNascimento:string){
        this.CPF = CPF;
        this.RG = RG;
        this.dataNascimento = dataNascimento;
    }
}

export class Juridica{
    CNPJ:string;
    razaoSocial:string;
    constructor(CNPJ:string, razaoSocial:string){
        this.CNPJ = CNPJ;
        this.razaoSocial = razaoSocial;
    }
}