import { AccountRepository } from '../_repositories/account.repository';
import { AccountFactory } from './account.factory';
import { AccountType } from './account.type';
import { Account } from './account';
export declare class AccountService {
    private readonly accountRepository;
    private readonly accountFactory;
    private idCounter;
    constructor(accountRepository: AccountRepository, accountFactory: AccountFactory);
    createAccount(type: AccountType, clientID: number, isManager: boolean): Account;
}
