import { Module } from '@nestjs/common';
<<<<<<< HEAD
import { ClientService } from './client.service';

@Module({
  providers: [ClientService]
=======
import { ClientController } from './client.controller';
import { ClientService } from './client.service';
import { ManagerService } from 'src/manager/manager.service';
import { ManagerRepository } from 'src/_repositories/manager.repository';
import { ClientRepository } from 'src/_repositories/client.repository';

@Module({
  controllers: [ClientController],
  providers: [ClientService,ClientRepository, ManagerService, ManagerRepository]
>>>>>>> feature/s04
})
export class ClientModule {}
