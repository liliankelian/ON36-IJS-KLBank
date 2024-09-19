import { SavingsAccount } from '../savings-account/savings-account';
export declare class SavingsAccountRepository {
    private readonly filePath;
    readSavingsAccount(): SavingsAccount[];
    writeSavingsAccount(savings: SavingsAccount[]): void;
}
