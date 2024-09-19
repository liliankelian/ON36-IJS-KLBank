"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientFisical = void 0;
const client_1 = require("../client/client");
class ClientFisical extends client_1.Client {
    constructor(clientID, managerId, accounts, fisical) {
        super(clientID, managerId, accounts);
        this.fisical = fisical;
    }
}
exports.ClientFisical = ClientFisical;
//# sourceMappingURL=client-fisical.js.map