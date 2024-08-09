import { Injectable, NotFoundException } from '@nestjs/common';
import { ClientRepository } from 'src/_repositories/client.repository';

import { Account } from 'src/account/account';
import { ManagerService } from 'src/manager/manager.service';
import { Client } from './client';

@Injectable()
export class ClientService {

    private ClientIdCounter: number;

    constructor (
        protected readonly clientRepository: ClientRepository, 
        protected readonly managerService: ManagerService
    ){
        const clients = this.clientRepository.readClient()
        this.ClientIdCounter = clients.length > 0 ? clients[clients.length - 1].ID + 1 : 1
    }

    create(managerID:number, accounts: Account[]): Client{
        const manager = this.managerService.findById(managerID);

        if(!manager){
            throw new NotFoundException(`Gerente com o ID ${managerID} não encontrado`)
        }

        const clients = this.clientRepository.readClient()

        const newClient = {
            ID: this.ClientIdCounter++,
            managerID: managerID,
            accounts: accounts
        }

        clients.push(newClient)

        this.clientRepository.writeClient(clients)

        this.managerService.AddClientToManager(managerID,newClient)

        return newClient
   
    }

    findById(id:number): Client{
        const clients = this.clientRepository.readClient()
        const client = clients.find(client => client.ID === id )

        if(!client){
            throw new NotFoundException(`Cliente com o codigo ${id} não encontrado`)
        }

        return client
    }

    addAccountToClient(ClientId: number, account:Account): Client{
        const clients = this.clientRepository.readClient()
        const client = clients.find(client => client.ID = ClientId)

        if(!client){
            throw new NotFoundException(`Cliente de ID ${ClientId} não encontrado`)
        }

        client.accounts.push(account)
        this.clientRepository.writeClient(clients)

        return client
    }
}
