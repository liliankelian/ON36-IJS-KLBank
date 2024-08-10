import { Module } from '@nestjs/common';
import { ManagerService } from './manager.service';
import { ManagerController } from './manager.controller';
import { ManagerRepository } from '../_repositories/manager.repository';
import { Fisical } from '../person/fisical';

@Module({
  providers: [ManagerService,ManagerRepository, Fisical],
  controllers: [ManagerController]
})
export class ManagerModule {}
