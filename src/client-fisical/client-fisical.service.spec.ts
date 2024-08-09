import { Test, TestingModule } from '@nestjs/testing';
import { ClientFisicalService } from './client-fisical.service';

describe('ClientFisicalService', () => {
  let service: ClientFisicalService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClientFisicalService],
    }).compile();

    service = module.get<ClientFisicalService>(ClientFisicalService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
