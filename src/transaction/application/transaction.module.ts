import { Module } from '@nestjs/common';
import { TransactionController } from '../presenter/transaction.controller';
import { TransactionService } from './transaction.service';
import { TransactionRepository } from '../../_repositories/transaction.repository';
import { SavingsAccountService } from '../../../docs/objects_old/savings-account/savings-account.service';
import { SavingsAccountRepository } from '../../_repositories/savings-account.repository';
import { ClientService } from '../../client/application/client.service';
import { ClientRepository } from '../../_repositories/client.repository';
import { ManagerService } from '../../manager/application/manager.service';
import { ManagerRepository } from '../../_repositories/manager.repository';

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
