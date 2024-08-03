import { Module } from '@nestjs/common';
import { CurrentAccountsController } from './current-accounts.controller';

@Module({
  controllers: [CurrentAccountsController]
})
export class CurrentAccountsModule {}
