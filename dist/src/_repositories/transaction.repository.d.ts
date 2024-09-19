import { Transaction } from 'src/transaction/transaction';
export declare class TransactionRepository {
    private readonly filePath;
    readTransaction(): Transaction[];
    writeTransaction(savings: Transaction[]): void;
}
