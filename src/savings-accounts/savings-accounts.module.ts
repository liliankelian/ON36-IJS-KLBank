import { Module } from '@nestjs/common';
import { SavingsAccountsService } from './savings-accounts.service';

@Module({
  providers: [SavingsAccountsService]
})
export class SavingsAccountsModule {}
