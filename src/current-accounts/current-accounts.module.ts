import { Module } from '@nestjs/common';
import { CurrentAccountsController } from './current-accounts.controller';
import { CheckingAccountRepository } from '../_repositories/checking-account.repository';

@Module({
  controllers: [CurrentAccountsController],
  providers: [CheckingAccountRepository]

})
export class CurrentAccountsModule {}
