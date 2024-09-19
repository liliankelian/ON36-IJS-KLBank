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
exports.ManagerService = void 0;
const common_1 = require("@nestjs/common");
const manager_repository_1 = require("../_repositories/manager.repository");
let ManagerService = class ManagerService {
    constructor(managerRepository) {
        this.managerRepository = managerRepository;
        const managers = this.managerRepository.readManager();
        this.ManagerIdCounter = managers.length > 0 ? managers[managers.length - 1].ID + 1 : 1;
    }
    create(CPF, RG, birthDate, fullName, email, address, phone, clients) {
        const managers = this.managerRepository.readManager();
        const newManager = {
            ID: this.ManagerIdCounter++,
            CPF,
            RG,
            birthDate,
            fullName,
            email,
            address,
            phone,
            clients
        };
        managers.push(newManager);
        this.managerRepository.writeManager(managers);
        return newManager;
    }
    findById(id) {
        const managers = this.managerRepository.readManager();
        const manager = managers.find(manager => manager.ID === id);
        if (!manager) {
            throw new common_1.NotFoundException(`Gerente não encontrado com o ID ${id}`);
        }
        return manager;
    }
    AddClientToManager(ManagerId, client) {
        const managers = this.managerRepository.readManager();
        const manager = managers.find(manager => manager.ID === ManagerId);
        if (!manager) {
            throw new common_1.NotFoundException(`Gerente não encontrado com o ID ${ManagerId}`);
        }
        manager.clients.push(client);
        this.managerRepository.writeManager(managers);
        return manager;
    }
};
exports.ManagerService = ManagerService;
exports.ManagerService = ManagerService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [manager_repository_1.ManagerRepository])
], ManagerService);
//# sourceMappingURL=manager.service.js.map