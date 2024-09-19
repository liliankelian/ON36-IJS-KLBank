import { Module } from '@nestjs/common';
import { ManagerService } from '../../application/manager/manager.service';
import { ManagerController } from '../presenter/manager.controller';
import { ManagerRepository } from '../_repositories/manager.repository';

@Module({
  providers: [ManagerService,ManagerRepository, 
  ],
  controllers: [ManagerController]
})
export class ManagerModule {}
