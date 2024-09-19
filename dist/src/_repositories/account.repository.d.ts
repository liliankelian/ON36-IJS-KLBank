import { Account } from 'src/account/account';
export declare class AccountRepository {
    private readonly filePath;
    readAccount(): Account[];
    writeAccount(checkings: Account[]): void;
}
