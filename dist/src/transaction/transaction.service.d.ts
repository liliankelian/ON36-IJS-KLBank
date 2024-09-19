import { TransactionRepository } from '../_repositories/transaction.repository';
import { Transaction } from './transaction';
import { TransactionType } from './transaction.type';
import { SavingsAccountService } from '../savings-account/savings-account.service';
export declare class TransactionService {
    private readonly transactionRepository;
    private readonly accountService;
    private idCounter;
    constructor(transactionRepository: TransactionRepository, accountService: SavingsAccountService);
    create(accountID: number, amount: number, type: TransactionType): Transaction;
    findById(id: number): Transaction;
    findAll(): Transaction[];
    findByAccountID(accountID: number): Transaction[];
    updateAmount(id: number, amount: number): Transaction;
    remove(id: number): void;
}
