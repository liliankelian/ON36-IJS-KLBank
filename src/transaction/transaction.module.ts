import { Module } from '@nestjs/common';
import { TransactionController } from './transaction.controller';
import { TransactionService } from './transaction.service';
import { TransactionRepository } from '../_repositories/transaction.repository';
import { SavingsAccountService } from '../savings-account/savings-account.service';
import { SavingsAccountRepository } from '../_repositories/savings-account.repository';
import { ClientService } from '../client/client.service';
import { ClientRepository } from '../_repositories/client.repository';
import { ManagerService } from '../manager/manager.service';
import { ManagerRepository } from '../_repositories/manager.repository';

@Module({
  controllers: [TransactionController],
  providers: [
    TransactionService, 
    TransactionRepository, 
    SavingsAccountService ,
    SavingsAccountRepository,
    ClientService,
    ClientRepository,
    ManagerService,
    ManagerRepository
  ]
})
export class TransactionModule {}
