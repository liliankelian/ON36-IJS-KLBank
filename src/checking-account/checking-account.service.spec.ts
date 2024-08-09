import { Test, TestingModule } from '@nestjs/testing';
import { CheckingAccountService } from './checking-account.service';

describe('CheckingAccountService', () => {
  let service: CheckingAccountService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CheckingAccountService],
    }).compile();

    service = module.get<CheckingAccountService>(CheckingAccountService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
