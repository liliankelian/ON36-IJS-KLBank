import { SavingsAccount } from './savings-account.model';
export declare class SavingsAccountsService {
    private readonly filepath;
    readAccounts(): SavingsAccount[];
    writeAccounts(accounts: SavingsAccount[]): void;
    deposit(value: number, account: SavingsAccount): SavingsAccount;
    checkBalance(account: SavingsAccount): number;
    withdraw(value: number, ID: number): SavingsAccount;
    transfer(value: number, IDsender: number, IDrecipient: number): SavingsAccount;
}
