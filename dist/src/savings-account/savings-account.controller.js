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
exports.SavingsAccountController = void 0;
const common_1 = require("@nestjs/common");
const savings_account_service_1 = require("./savings-account.service");
const savings_account_1 = require("./savings-account");
let SavingsAccountController = class SavingsAccountController {
    constructor(savingsService) {
        this.savingsService = savingsService;
    }
    create(clientID, balance, rate, isManager) {
        return this.savingsService.create(clientID, balance, rate, isManager);
    }
    findById(id) {
        return this.savingsService.findById(Number(id));
    }
    findAll() {
        return this.savingsService.findAll();
    }
    updateBalance(id, balance) {
        return this.savingsService.updateBalance(Number(id), Number(balance));
    }
    delete(id) {
        return this.savingsService.remove(Number(id));
    }
};
exports.SavingsAccountController = SavingsAccountController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)('clientID', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)('balance', common_1.ParseIntPipe)),
    __param(2, (0, common_1.Body)('rate')),
    __param(3, (0, common_1.Body)('isManager', common_1.ParseBoolPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Number, Boolean]),
    __metadata("design:returntype", savings_account_1.SavingsAccount)
], SavingsAccountController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [common_1.ParseIntPipe]),
    __metadata("design:returntype", savings_account_1.SavingsAccount)
], SavingsAccountController.prototype, "findById", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SavingsAccountController.prototype, "findAll", null);
__decorate([
    (0, common_1.Patch)(':id/balance'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)('balance')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [common_1.ParseIntPipe, common_1.ParseIntPipe]),
    __metadata("design:returntype", savings_account_1.SavingsAccount)
], SavingsAccountController.prototype, "updateBalance", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [common_1.ParseIntPipe]),
    __metadata("design:returntype", void 0)
], SavingsAccountController.prototype, "delete", null);
exports.SavingsAccountController = SavingsAccountController = __decorate([
    (0, common_1.Controller)('savings-account'),
    __metadata("design:paramtypes", [savings_account_service_1.SavingsAccountService])
], SavingsAccountController);
//# sourceMappingURL=savings-account.controller.js.map