import { CheckingAccount } from 'src/checking-account/checking-account';
export declare class CheckingAccountRepository {
    private readonly filePath;
    readCheckingAccount(): CheckingAccount[];
    writeCheckingAccount(checkings: CheckingAccount[]): void;
}
