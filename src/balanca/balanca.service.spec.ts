import { Test, TestingModule } from '@nestjs/testing';
import { BalancaService } from './balanca.service';

describe('BalancaService', () => {
  let service: BalancaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BalancaService],
    }).compile();

    service = module.get<BalancaService>(BalancaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
