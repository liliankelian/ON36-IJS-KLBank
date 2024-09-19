"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckingAccountRepository = void 0;
const common_1 = require("@nestjs/common");
const fs = require("fs");
const path = require("path");
let CheckingAccountRepository = class CheckingAccountRepository {
    constructor() {
        this.filePath = path.resolve('src/_data/checking-account.json');
    }
    readCheckingAccount() {
        const data = fs.readFileSync(this.filePath, 'utf8');
        return JSON.parse(data);
    }
    writeCheckingAccount(checkings) {
        fs.writeFileSync(this.filePath, JSON.stringify(checkings, null, 2), 'utf8');
    }
};
exports.CheckingAccountRepository = CheckingAccountRepository;
exports.CheckingAccountRepository = CheckingAccountRepository = __decorate([
    (0, common_1.Injectable)()
], CheckingAccountRepository);
//# sourceMappingURL=checking-account.repository.js.map