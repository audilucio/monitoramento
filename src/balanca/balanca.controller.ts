import { Body, Controller, Get, Post } from '@nestjs/common';
import { BalancaService } from './balanca.service';
import { CreatePesagemDto } from './dto/create-pesagem.dto';

@Controller('balanca')
export class BalancaController {

  constructor(private readonly balancaService: BalancaService) {}

  @Post()
  async salvarPesagem(@Body() dados: CreatePesagemDto) {
    return await this.balancaService.criarPesagem(dados);
  }

  @Get()
  async listarPesagens() {
    return await this.balancaService.listarPesagens();
  }

}
