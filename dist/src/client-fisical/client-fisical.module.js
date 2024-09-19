"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientFisicalModule = void 0;
const common_1 = require("@nestjs/common");
const client_fisical_service_1 = require("./client-fisical.service");
const client_fisical_controller_1 = require("./client-fisical.controller");
const manager_service_1 = require("../manager/manager.service");
const manager_repository_1 = require("../_repositories/manager.repository");
const client_fisical_repository_1 = require("../_repositories/client-fisical.repository");
let ClientFisicalModule = class ClientFisicalModule {
};
exports.ClientFisicalModule = ClientFisicalModule;
exports.ClientFisicalModule = ClientFisicalModule = __decorate([
    (0, common_1.Module)({
        providers: [
            client_fisical_service_1.ClientFisicalService,
            client_fisical_repository_1.ClientFisicalRepository,
            manager_service_1.ManagerService,
            manager_repository_1.ManagerRepository
        ],
        controllers: [client_fisical_controller_1.ClientFisicalController]
    })
], ClientFisicalModule);
//# sourceMappingURL=client-fisical.module.js.map