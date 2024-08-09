import { Test, TestingModule } from '@nestjs/testing';
import { ClientFisicalController } from './client-fisical.controller';

describe('ClientFisicalController', () => {
  let controller: ClientFisicalController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClientFisicalController],
    }).compile();

    controller = module.get<ClientFisicalController>(ClientFisicalController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
