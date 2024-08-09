import { Module } from '@nestjs/common';
import { CheckingAccountController } from './checking-account.controller';
import { CheckingAccountService } from './checking-account.service';
import { CheckingAccountRepository } from 'src/_repositories/checking-account.repository';
import { ClientService } from 'src/client/client.service';
import { ClientRepository } from 'src/_repositories/client.repository';
import { ManagerService } from 'src/manager/manager.service';
import { ManagerRepository } from 'src/_repositories/manager.repository';

@Module({
  controllers: [CheckingAccountController],
  providers: [
    CheckingAccountService, 
    CheckingAccountRepository,
    ClientService, 
    ClientRepository, 
    ManagerService, 
    ManagerRepository
  ]
})
export class CheckingAccountModule {}
