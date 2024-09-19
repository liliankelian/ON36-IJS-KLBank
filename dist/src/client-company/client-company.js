"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientCompany = void 0;
const client_1 = require("../client/client");
class ClientCompany extends client_1.Client {
    constructor(clientID, managerId, accounts, company) {
        super(clientID, managerId, accounts);
        this.company = company;
    }
}
exports.ClientCompany = ClientCompany;
//# sourceMappingURL=client-company.js.map