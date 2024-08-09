import { Module } from '@nestjs/common';
import { ManagerService } from './manager.service';
import { ManagerController } from './manager.controller';
import { ManagerRepository } from 'src/_repositories/manager.repository';

@Module({
  providers: [ManagerService,ManagerRepository],
  controllers: [ManagerController]
})
export class ManagerModule {}
