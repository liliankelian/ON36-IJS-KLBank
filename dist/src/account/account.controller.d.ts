import { Account } from './account';
import { AccountService } from './account.service';
import { AccountType } from './account.type';
export declare class AccountController {
    private readonly accountService;
    constructor(accountService: AccountService);
    create(type: AccountType, clientID: number, isManager: boolean): Account;
}
