import { Injectable, NotFoundException } from '@nestjs/common';
import { CheckingAccountRepository } from 'src/_repositories/checking-account.repository';
import { ClientService } from 'src/client/client.service';
import { CheckingAccount } from '../../../src/account/domain/models/checking-account';

@Injectable()
export class CheckingAccountService {

    constructor(
        private readonly checkingRepository: CheckingAccountRepository,
        private readonly clientService: ClientService
    ){}

    create(clientID: number, balance: number,limit:number, isManager: boolean)
    {
        if(!isManager){
            throw new NotFoundException(`Somente gerente tem acesso a criar uma conta`)
        }

        const client = this.clientService.findById(clientID)
        if(!client){
            throw new NotFoundException(`Cliente com o ID ${clientID} não foi encontrado`)
        }

        const checkings = this.checkingRepository.readCheckingAccount()

        const newChecking = new CheckingAccount(
                                    checkings.length > 0 ? checkings[checkings.length - 1].ID + 1: 1,
                                    clientID,
                                    balance,
                                    limit
                                )

        checkings.push(newChecking);
        this.checkingRepository.writeCheckingAccount(checkings);
        this.clientService.addAccountToClient(clientID, newChecking)
        return newChecking
    }

    remove(id:number):void
    {
        const checkings = this.checkingRepository.readCheckingAccount();
        const checkingsFilter = checkings.filter(checking => checking.ID !== id)
        this.checkingRepository.writeCheckingAccount(checkingsFilter);
    }

}
