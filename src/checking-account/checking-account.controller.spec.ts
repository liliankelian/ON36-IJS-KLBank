import { Test, TestingModule } from '@nestjs/testing';
import { CheckingAccountController } from './checking-account.controller';

describe('CheckingAccountController', () => {
  let controller: CheckingAccountController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CheckingAccountController],
    }).compile();

    controller = module.get<CheckingAccountController>(CheckingAccountController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
