import { ClientRepository } from '../_repositories/client.repository';
import { Account } from '../account/account';
import { ManagerService } from '../manager/manager.service';
import { Client } from './client';
export declare class ClientService {
    protected readonly clientRepository: ClientRepository;
    protected readonly managerService: ManagerService;
    private ClientIdCounter;
    constructor(clientRepository: ClientRepository, managerService: ManagerService);
    create(managerID: number, accounts: Account[]): Client;
    findById(id: number): Client;
    addAccountToClient(ClientId: number, account: Account): Client;
}
