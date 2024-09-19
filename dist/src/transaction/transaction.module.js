"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionModule = void 0;
const common_1 = require("@nestjs/common");
const transaction_controller_1 = require("./transaction.controller");
const transaction_service_1 = require("./transaction.service");
const transaction_repository_1 = require("../_repositories/transaction.repository");
const savings_account_service_1 = require("../savings-account/savings-account.service");
const savings_account_repository_1 = require("../_repositories/savings-account.repository");
const client_service_1 = require("../client/client.service");
const client_repository_1 = require("../_repositories/client.repository");
const manager_service_1 = require("../manager/manager.service");
const manager_repository_1 = require("../_repositories/manager.repository");
let TransactionModule = class TransactionModule {
};
exports.TransactionModule = TransactionModule;
exports.TransactionModule = TransactionModule = __decorate([
    (0, common_1.Module)({
        controllers: [transaction_controller_1.TransactionController],
        providers: [
            transaction_service_1.TransactionService,
            transaction_repository_1.TransactionRepository,
            savings_account_service_1.SavingsAccountService,
            savings_account_repository_1.SavingsAccountRepository,
            client_service_1.ClientService,
            client_repository_1.ClientRepository,
            manager_service_1.ManagerService,
            manager_repository_1.ManagerRepository
        ]
    })
], TransactionModule);
//# sourceMappingURL=transaction.module.js.map