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
exports.ClientFisicalService = void 0;
const common_1 = require("@nestjs/common");
const client_fisical_repository_1 = require("../_repositories/client-fisical.repository");
const manager_service_1 = require("../manager/manager.service");
let ClientFisicalService = class ClientFisicalService {
    constructor(clientFisicalRepository, managerService) {
        this.clientFisicalRepository = clientFisicalRepository;
        this.managerService = managerService;
        const clientsFisical = this.clientFisicalRepository.readClientFisical();
        this.clientFisicalIdCounter = clientsFisical.length > 0 ? clientsFisical[clientsFisical.length - 1].ID + 1 : 1;
    }
    create(managerID, accounts, fisical) {
        const manager = this.managerService.findById(managerID);
        if (!manager) {
            throw new common_1.NotFoundException(`Gerente com o ID ${managerID} não encontrado`);
        }
        const clientsFisical = this.clientFisicalRepository.readClientFisical();
        const newClientFisical = {
            ID: this.clientFisicalIdCounter,
            managerID: managerID,
            accounts: accounts,
            fisical: fisical
        };
        clientsFisical.push(newClientFisical);
        this.clientFisicalRepository.writeClientFisical(clientsFisical);
        return newClientFisical;
    }
};
exports.ClientFisicalService = ClientFisicalService;
exports.ClientFisicalService = ClientFisicalService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [client_fisical_repository_1.ClientFisicalRepository,
        manager_service_1.ManagerService])
], ClientFisicalService);
//# sourceMappingURL=client-fisical.service.js.map