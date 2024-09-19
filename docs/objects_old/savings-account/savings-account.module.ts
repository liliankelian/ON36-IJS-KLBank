import { Module } from '@nestjs/common';
import { SavingsAccountController } from '../../../src/account/presenter/savings-account.controller';
import { SavingsAccountService } from './savings-account.service';
import { SavingsAccountRepository } from '../../_repositories/savings-account.repository';
import { ClientService } from '../../../src/client/application/client.service';
import { ClientRepository } from '../../_repositories/client.repository';
import { ManagerService } from '../../../src/manager/application/manager.service';
import { ManagerRepository } from '../../_repositories/manager.repository';

@Module({
  controllers: [SavingsAccountController],
  providers: [
    SavingsAccountService, 
    SavingsAccountRepository, 
    ClientService, 
    ClientRepository, 
    ManagerService, 
    ManagerRepository
  ]
})
export class SavingsAccountModule {}
