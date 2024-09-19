"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientService = void 0;
const common_1 = require("@nestjs/common");
const client_repository_1 = require("../_repositories/client.repository");
const manager_service_1 = require("../manager/manager.service");
let ClientService = class ClientService {
    constructor(clientRepository, managerService) {
        this.clientRepository = clientRepository;
        this.managerService = managerService;
        const clients = this.clientRepository.readClient();
        this.ClientIdCounter = clients.length > 0 ? clients[clients.length - 1].ID + 1 : 1;
    }
    create(managerID, accounts) {
        const manager = this.managerService.findById(managerID);
        if (!manager) {
            throw new common_1.NotFoundException(`Gerente com o ID ${managerID} não encontrado`);
        }
        const clients = this.clientRepository.readClient();
        const newClient = {
            ID: this.ClientIdCounter++,
            managerID: managerID,
            accounts: accounts
        };
        clients.push(newClient);
        this.clientRepository.writeClient(clients);
        this.managerService.AddClientToManager(managerID, newClient);
        return newClient;
    }
    findById(id) {
        const clients = this.clientRepository.readClient();
        const client = clients.find(client => client.ID === id);
        if (!client) {
            throw new common_1.NotFoundException(`Cliente com o codigo ${id} não encontrado`);
        }
        return client;
    }
    addAccountToClient(ClientId, account) {
        const clients = this.clientRepository.readClient();
        const client = clients.find(client => client.ID = ClientId);
        if (!client) {
            throw new common_1.NotFoundException(`Cliente de ID ${ClientId} não encontrado`);
        }
        client.accounts.push(account);
        this.clientRepository.writeClient(clients);
        return client;
    }
};
exports.ClientService = ClientService;
exports.ClientService = ClientService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [client_repository_1.ClientRepository,
        manager_service_1.ManagerService])
], ClientService);
//# sourceMappingURL=client.service.js.map