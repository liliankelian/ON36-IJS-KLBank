import { Module } from '@nestjs/common';
import { AccountService } from './account.service';
import { AccountController } from '../presenter/account.controller';
import { AccountFactory } from '../domain/factories/account.factory';
import { SavingsAccountService } from '../../../docs/objects_old/savings-account/savings-account.service';
import { CheckingAccountService } from '../../../docs/objects_old/checking-account/checking-account.service';
import { AccountRepository } from '../../_repositories/account.repository';
import { SavingsAccountRepository } from '../../_repositories/savings-account.repository';
import { CheckingAccountRepository } from '../../_repositories/checking-account.repository';


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
   
  ],
  controllers: [AccountController ]
})
export class AccountModule {}
