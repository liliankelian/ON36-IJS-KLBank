"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Manager = void 0;
const fisical_1 = require("../person/fisical");
class Manager extends fisical_1.Fisical {
    constructor(ID, CPF, RG, birthDate, fullName, email, address, phone, clients) {
        super(CPF, RG, birthDate, fullName, email, address, phone);
        this.ID = ID;
        this.clients = clients;
    }
}
exports.Manager = Manager;
//# sourceMappingURL=manager.js.map