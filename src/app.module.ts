import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
<<<<<<< HEAD
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
=======
import { ClientModule } from './client/client.module';
import { ManagerModule } from './manager/manager.module';
import { CheckingAccountModule } from './checking-account/checking-account.module';
import { SavingsAccountModule } from './savings-account/savings-account.module';
import { TransactionModule } from './transaction/transaction.module';
import { AccountModule } from './account/account.module';
import { ClientFisicalModule } from './client-fisical/client-fisical.module';

@Module({
  imports: [ClientModule, ManagerModule, CheckingAccountModule, SavingsAccountModule, TransactionModule, AccountModule, ClientFisicalModule],
  controllers: [AppController],
  providers: [AppService],
>>>>>>> feature/s04
})
export class AppModule {}
