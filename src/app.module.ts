import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
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
})
export class AppModule {}
