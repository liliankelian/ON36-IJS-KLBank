import { Module } from '@nestjs/common';
import { AccountService } from './account.service';
import { AccountController } from './account.controller';
import { AccountRepository } from '../_repositories/account.repository';
import { AccountFactory } from './account.factory';
import { SavingsAccountService } from '../savings-account/savings-account.service';
import { CheckingAccountService } from '../checking-account/checking-account.service';
import { SavingsAccountRepository } from '../_repositories/savings-account.repository';
import { CheckingAccountRepository } from '../_repositories/checking-account.repository';
import { ClientService } from '../client/client.service';
import { ClientRepository } from '../_repositories/client.repository';
import { ManagerService } from '../manager/manager.service';
import { ManagerRepository } from '../_repositories/manager.repository';

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
