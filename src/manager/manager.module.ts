import { Module } from '@nestjs/common';
<<<<<<< HEAD
import { ManagerController } from './manager.controller';

@Module({
=======
import { ManagerService } from './manager.service';
import { ManagerController } from './manager.controller';
import { ManagerRepository } from 'src/_repositories/manager.repository';

@Module({
  providers: [ManagerService,ManagerRepository],
>>>>>>> feature/s04
  controllers: [ManagerController]
})
export class ManagerModule {}
