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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountController = void 0;
const common_1 = require("@nestjs/common");
const account_1 = require("./account");
const account_service_1 = require("./account.service");
const account_type_1 = require("./account.type");
let AccountController = class AccountController {
    constructor(accountService) {
        this.accountService = accountService;
    }
    create(type, clientID, isManager) {
        return this.accountService.createAccount(type, clientID, isManager);
    }
};
exports.AccountController = AccountController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)('type')),
    __param(1, (0, common_1.Body)('clientID', common_1.ParseIntPipe)),
    __param(2, (0, common_1.Body)('isManager', common_1.ParseBoolPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number, Boolean]),
    __metadata("design:returntype", account_1.Account)
], AccountController.prototype, "create", null);
exports.AccountController = AccountController = __decorate([
    (0, common_1.Controller)('account'),
    __metadata("design:paramtypes", [account_service_1.AccountService])
], AccountController);
//# sourceMappingURL=account.controller.js.map