import { Injectable, NotFoundException } from '@nestjs/common';
import { Account } from '../account/account';
import { Fisical } from '../person/fisical';
import { ClientFisical } from './client-fisical';
import { ClientFisicalRepository } from '../_repositories/client-fisical.repository';
import { ManagerService } from '../manager/manager.service';

@Injectable()
export class ClientFisicalService {

    private clientFisicalIdCounter: number

    constructor(
        protected readonly clientFisicalRepository: ClientFisicalRepository,
        protected readonly managerService: ManagerService
    ){
        const clientsFisical = this.clientFisicalRepository.readClientFisical()
        this.clientFisicalIdCounter = clientsFisical.length > 0 ? clientsFisical[clientsFisical.length - 1].ID + 1: 1
    }

    create(managerID:number, accounts: Account[], fisical: Fisical): ClientFisical{
        const manager = this.managerService.findById(managerID);

        if(!manager){
            throw new NotFoundException(`Gerente com o ID ${managerID} não encontrado`)
        }

        const clientsFisical = this.clientFisicalRepository.readClientFisical()

        const newClientFisical: ClientFisical = {
            ID: this.clientFisicalIdCounter,
            managerID: managerID, 
            accounts: accounts,
            fisical: fisical
        }

        clientsFisical.push(newClientFisical)
        this.clientFisicalRepository.writeClientFisical(clientsFisical)

        return newClientFisical
    }

}
