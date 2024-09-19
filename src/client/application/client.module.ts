import { Module } from '@nestjs/common';
import { ClientController } from '../presenter/client.controller';
import { ClientService } from './client.service';
import { ManagerService } from '../../manager/application/manager.service';
import { ManagerRepository } from '../../_repositories/manager.repository';
import { ClientRepository } from '../../_repositories/client.repository';

@Module({
  controllers: [ClientController],
  providers: [ClientService,ClientRepository, ManagerService, ManagerRepository]
})
export class ClientModule {}
