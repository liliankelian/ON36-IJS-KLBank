import { Module } from '@nestjs/common';
import { SavingsAccountController } from './savings-account.controller';
import { SavingsAccountService } from './savings-account.service';
import { SavingsAccountRepository } from 'src/_repositories/savings-account.repository';
import { ClientService } from 'src/client/client.service';
import { ClientRepository } from 'src/_repositories/client.repository';
import { ManagerService } from 'src/manager/manager.service';
import { ManagerRepository } from 'src/_repositories/manager.repository';

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
