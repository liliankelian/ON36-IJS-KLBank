import { ManagerRepository } from '../_repositories/manager.repository';
import { Client } from '../client/client';
import { Manager } from './manager';
export declare class ManagerService {
    private readonly managerRepository;
    private ManagerIdCounter;
    constructor(managerRepository: ManagerRepository);
    create(CPF: string, RG: string, birthDate: Date, fullName: string, email: string, address: string, phone: string, clients: Client[]): Manager;
    findById(id: number): Manager;
    AddClientToManager(ManagerId: number, client: Client): Manager;
}
