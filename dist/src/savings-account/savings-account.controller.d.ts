import { ParseIntPipe } from '@nestjs/common';
import { SavingsAccountService } from './savings-account.service';
import { SavingsAccount } from './savings-account';
export declare class SavingsAccountController {
    private readonly savingsService;
    constructor(savingsService: SavingsAccountService);
    create(clientID: number, balance: number, rate: number, isManager: boolean): SavingsAccount;
    findById(id: ParseIntPipe): SavingsAccount;
    findAll(): SavingsAccount[];
    updateBalance(id: ParseIntPipe, balance: ParseIntPipe): SavingsAccount;
    delete(id: ParseIntPipe): void;
}
