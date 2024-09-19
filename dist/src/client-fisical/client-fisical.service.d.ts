import { Account } from '../account/account';
import { Fisical } from '../person/fisical';
import { ClientFisical } from './client-fisical';
import { ClientFisicalRepository } from '../_repositories/client-fisical.repository';
import { ManagerService } from '../manager/manager.service';
export declare class ClientFisicalService {
    protected readonly clientFisicalRepository: ClientFisicalRepository;
    protected readonly managerService: ManagerService;
    private clientFisicalIdCounter;
    constructor(clientFisicalRepository: ClientFisicalRepository, managerService: ManagerService);
    create(managerID: number, accounts: Account[], fisical: Fisical): ClientFisical;
}
