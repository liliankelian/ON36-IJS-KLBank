import { Module } from '@nestjs/common';
import { TransactionController } from './transaction.controller';
import { TransactionService } from './transaction.service';
import { TransactionRepository } from 'src/_repositories/transaction.repository';
import { SavingsAccountService } from 'src/savings-account/savings-account.service';
import { SavingsAccountRepository } from 'src/_repositories/savings-account.repository';
import { ClientService } from 'src/client/client.service';
import { ClientRepository } from 'src/_repositories/client.repository';
import { ManagerService } from 'src/manager/manager.service';
import { ManagerRepository } from 'src/_repositories/manager.repository';

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
