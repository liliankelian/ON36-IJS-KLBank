"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const client_module_1 = require("./client/client.module");
const manager_module_1 = require("./manager/manager.module");
const checking_account_module_1 = require("./checking-account/checking-account.module");
const savings_account_module_1 = require("./savings-account/savings-account.module");
const transaction_module_1 = require("./transaction/transaction.module");
const account_module_1 = require("./account/account.module");
const client_fisical_module_1 = require("./client-fisical/client-fisical.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            client_module_1.ClientModule,
            manager_module_1.ManagerModule,
            checking_account_module_1.CheckingAccountModule,
            savings_account_module_1.SavingsAccountModule,
            transaction_module_1.TransactionModule,
            account_module_1.AccountModule,
            client_fisical_module_1.ClientFisicalModule
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map