import { Module } from '@nestjs/common';
import { ClientFisicalService } from './client-fisical.service';
import { ClientFisicalController } from '../../../presenter/client-fisical.controller';
import { ManagerService } from 'src/manager/manager.service';
import { ManagerRepository } from 'src/_repositories/manager.repository';
import { ClientFisicalRepository } from 'src/_repositories/client-fisical.repository';

@Module({
  providers: [
    ClientFisicalService, 
    ClientFisicalRepository, 
    ManagerService, 
    ManagerRepository],
  controllers: [ClientFisicalController]
})
export class ClientFisicalModule {}
