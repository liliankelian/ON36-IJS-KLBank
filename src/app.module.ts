import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BankAccountsModule } from './bank-accounts/bank-accounts.module';
import { ClientController } from './client/client.controller';
import { ClientModule } from './client/client.module';
import { ManagerService } from './manager/manager.service';
import { ManagerModule } from './manager/manager.module';
import { SavingsAccountsController } from './savings-accounts/savings-accounts.controller';
import { SavingsAccountsModule } from './savings-accounts/savings-accounts.module';
import { CurrentAccountsService } from './current-accounts/current-accounts.service';
import { CurrentAccountsModule } from './current-accounts/current-accounts.module';
import { DbService } from './db/db.service';

@Module({
  imports: [BankAccountsModule, ClientModule, ManagerModule, SavingsAccountsModule, CurrentAccountsModule],
  controllers: [AppController, ClientController, SavingsAccountsController],
  providers: [AppService, ManagerService, CurrentAccountsService, DbService],
})
export class AppModule {}
