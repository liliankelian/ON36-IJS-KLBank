"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Juridica = exports.Fisica = exports.Cliente = void 0;
class Cliente {
    constructor(ID, nomeCompleto, email, endereco, telefone) {
        this.ID = ID;
        this.nomeCompleto = nomeCompleto;
        this.email = email;
        this.endereco = endereco;
        this.telefone = telefone;
    }
}
exports.Cliente = Cliente;
class Fisica {
    constructor(CPF, RG, dataNascimento) {
        this.CPF = CPF;
        this.RG = RG;
        this.dataNascimento = dataNascimento;
    }
}
exports.Fisica = Fisica;
class Juridica {
    constructor(CNPJ, razaoSocial) {
        this.CNPJ = CNPJ;
        this.razaoSocial = razaoSocial;
    }
}
exports.Juridica = Juridica;
//# sourceMappingURL=Cliente.js.map