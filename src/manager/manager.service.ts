<<<<<<< HEAD
import { Injectable } from '@nestjs/common';

@Injectable()
export class ManagerService {}
=======
import { Injectable, NotFoundException } from '@nestjs/common';
import { ManagerRepository } from 'src/_repositories/manager.repository';
import { Client } from 'src/client/client';
import { Manager } from './manager';

@Injectable()
export class ManagerService {
    private ManagerIdCounter: number;

    /*
        Incluir métodos que irá permitir abrir uma conta, fechar uma conta 
        e modificar o tipo da conta se é uma poupança ou conta corrente

        Implementar métodos na classe Gerente para adicionar e remover clientes, 
        bem como para abrir, fechar e modificar o tipo de conta para um determinado cliente.

        ID: number,
        CPF: string, 
        RG: string, 
        birthDate: Date, 
        fullName: string, 
        email: string, 
        address: string, 
        phone: string, 
        clients: Client[]
    */

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
>>>>>>> feature/s04
