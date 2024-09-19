import { SavingsAccount } from './savings-account';
import { SavingsAccountRepository } from '../_repositories/savings-account.repository';
import { ClientService } from '../client/client.service';
export declare class SavingsAccountService {
    private readonly savingsRepository;
    private readonly clientService;
    constructor(savingsRepository: SavingsAccountRepository, clientService: ClientService);
    create(clientID: number, balance: number, rate: number, isManager: boolean): SavingsAccount;
    findById(id: number): SavingsAccount;
    findAll(): SavingsAccount[];
    updateBalance(id: number, balance: number): SavingsAccount;
    remove(id: number): void;
}
