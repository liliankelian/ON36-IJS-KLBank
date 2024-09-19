import { CheckingAccountRepository } from 'src/_repositories/checking-account.repository';
import { ClientService } from 'src/client/client.service';
import { CheckingAccount } from './checking-account';
export declare class CheckingAccountService {
    private readonly checkingRepository;
    private readonly clientService;
    constructor(checkingRepository: CheckingAccountRepository, clientService: ClientService);
    create(clientID: number, balance: number, limit: number, isManager: boolean): CheckingAccount;
    remove(id: number): void;
}
