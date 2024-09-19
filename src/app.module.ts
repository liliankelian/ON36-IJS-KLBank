import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientModule } from './client/application/client.module';
import { ManagerModule } from './manager/application/manager.module';
import { TransactionModule } from './transaction/application/transaction.module';
import { AccountModule } from './account/application/account.module';
import { ClientFisicalModule } from './client/application/client-fisical/client-fisical.module';

@Module({
  imports: [
    ClientModule, 
    ManagerModule, 
    TransactionModule, 
    AccountModule, 
    ClientFisicalModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
