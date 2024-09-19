import { Injectable, NotFoundException } from '@nestjs/common';
import { ManagerRepository } from '../_repositories/manager.repository';
import { Client } from '../../client/domain/models/client';
import { Manager } from '../domain/models/manager';

@Injectable()
export class ManagerService {
    private ManagerIdCounter: number;

    constructor(private readonly managerRepository: ManagerRepository){
        const managers = this.managerRepository.readManager();
        this.ManagerIdCounter = managers.length > 0 ? managers[managers.length - 1].ID + 1: 1;
    }

    create(
        CPF: string, 
        RG: string, 
        birthDate: Date, 
        fullName: string, 
        email: string, 
        address: string, 
        phone: string, 
        clients: Client[]
    ): Manager
    {
        const managers = this.managerRepository.readManager();

        const newManager = {
            ID: this.ManagerIdCounter++,
            CPF,
            RG,
            birthDate,
            fullName,
            email,
            address,
            phone,
            clients
        }

        managers.push(newManager);
        this.managerRepository.writeManager(managers);
        return newManager;
    }

    findById(id: number): Manager {
        const managers = this.managerRepository.readManager();
        const manager = managers.find(manager => manager.ID === id)

        if(!manager){
            throw new NotFoundException(`Gerente não encontrado com o ID ${id}`)
        }

        return manager
    }

    AddClientToManager(ManagerId:number, client: Client): Manager{
        const managers = this.managerRepository.readManager();
        const manager = managers.find(manager => manager.ID === ManagerId)

        if(!manager){
            throw new NotFoundException(`Gerente não encontrado com o ID ${ManagerId}`)
        }

        manager.clients.push(client);
        this.managerRepository.writeManager(managers)
        return manager

    }


}
