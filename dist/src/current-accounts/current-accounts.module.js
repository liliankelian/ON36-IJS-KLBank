"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrentAccountsModule = void 0;
const common_1 = require("@nestjs/common");
const current_accounts_controller_1 = require("./current-accounts.controller");
const checking_account_repository_1 = require("../_repositories/checking-account.repository");
let CurrentAccountsModule = class CurrentAccountsModule {
};
exports.CurrentAccountsModule = CurrentAccountsModule;
exports.CurrentAccountsModule = CurrentAccountsModule = __decorate([
    (0, common_1.Module)({
        controllers: [current_accounts_controller_1.CurrentAccountsController],
        providers: [checking_account_repository_1.CheckingAccountRepository]
    })
], CurrentAccountsModule);
//# sourceMappingURL=current-accounts.module.js.map