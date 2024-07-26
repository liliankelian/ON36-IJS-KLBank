import { Test, TestingModule } from '@nestjs/testing';
import { SavingsAccountsController } from './savings-accounts.controller';

describe('SavingsAccountsController', () => {
  let controller: SavingsAccountsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SavingsAccountsController],
    }).compile();

    controller = module.get<SavingsAccountsController>(SavingsAccountsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
