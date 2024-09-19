"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountModule = void 0;
const common_1 = require("@nestjs/common");
const account_service_1 = require("./account.service");
const account_controller_1 = require("./account.controller");
const account_repository_1 = require("../_repositories/account.repository");
const account_factory_1 = require("./account.factory");
const savings_account_service_1 = require("../savings-account/savings-account.service");
const checking_account_service_1 = require("../checking-account/checking-account.service");
const savings_account_repository_1 = require("../_repositories/savings-account.repository");
const checking_account_repository_1 = require("../_repositories/checking-account.repository");
const client_service_1 = require("../client/client.service");
const client_repository_1 = require("../_repositories/client.repository");
const manager_service_1 = require("../manager/manager.service");
const manager_repository_1 = require("../_repositories/manager.repository");
let AccountModule = class AccountModule {
};
exports.AccountModule = AccountModule;
exports.AccountModule = AccountModule = __decorate([
    (0, common_1.Module)({
        providers: [
            account_service_1.AccountService,
            account_repository_1.AccountRepository,
            account_service_1.AccountService,
            account_factory_1.AccountFactory,
            savings_account_service_1.SavingsAccountService,
            savings_account_repository_1.SavingsAccountRepository,
            checking_account_service_1.CheckingAccountService,
            checking_account_repository_1.CheckingAccountRepository,
            client_service_1.ClientService,
            client_repository_1.ClientRepository,
            manager_service_1.ManagerService,
            manager_repository_1.ManagerRepository
        ],
        controllers: [account_controller_1.AccountController]
    })
], AccountModule);
//# sourceMappingURL=account.module.js.map