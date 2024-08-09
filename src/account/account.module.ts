import { Module } from '@nestjs/common';
import { AccountService } from './account.service';
import { AccountController } from './account.controller';
import { AccountRepository } from 'src/_repositories/account.repository';
import { AccountFactory } from './account.factory';
import { SavingsAccountService } from 'src/savings-account/savings-account.service';
import { CheckingAccountService } from 'src/checking-account/checking-account.service';
import { SavingsAccountRepository } from 'src/_repositories/savings-account.repository';
import { CheckingAccountRepository } from 'src/_repositories/checking-account.repository';
import { ClientService } from 'src/client/client.service';
import { ClientRepository } from 'src/_repositories/client.repository';
import { ManagerService } from 'src/manager/manager.service';
import { ManagerRepository } from 'src/_repositories/manager.repository';

@Module({
  providers: [
    AccountService,
    AccountRepository, 
    AccountService, 
    AccountFactory, 
    SavingsAccountService, 
    SavingsAccountRepository,
    CheckingAccountService,
    CheckingAccountRepository,
    ClientService,
    ClientRepository,
    ManagerService,
    ManagerRepository
  ],
  controllers: [AccountController ]
})
export class AccountModule {}
