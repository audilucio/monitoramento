import { Test, TestingModule } from '@nestjs/testing';
import { BalancaController } from './balanca.controller';

describe('BalancaController', () => {
  let controller: BalancaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BalancaController],
    }).compile();

    controller = module.get<BalancaController>(BalancaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
