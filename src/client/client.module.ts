import { Module } from '@nestjs/common';
import { ClientController } from './client.controller';
import { ClientService } from './client.service';
import { ManagerService } from '../manager/manager.service';
import { ManagerRepository } from '../_repositories/manager.repository';
import { ClientRepository } from '../_repositories/client.repository';

@Module({
  controllers: [ClientController],
  providers: [ClientService,ClientRepository, ManagerService, ManagerRepository]
})
export class ClientModule {}
