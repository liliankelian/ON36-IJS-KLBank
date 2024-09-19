import { TransactionType } from './transaction.type';
import { TransactionService } from './transaction.service';
import { Transaction } from './transaction';
export declare class TransactionController {
    private readonly transactionsService;
    constructor(transactionsService: TransactionService);
    create(accountID: number, amount: number, type: TransactionType): Transaction;
    findAll(): Transaction[];
}
