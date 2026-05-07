import { Injectable } from '@nestjs/common';
import { WebsocketGateway } from '../websocket/websocket.gateway';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePesagemDto } from './dto/create-pesagem.dto';

@Injectable()
export class BalancaService {

  constructor(
    private prisma: PrismaService,
    private websocketGateway: WebsocketGateway,
  ) {}

  async criarPesagem(dados: CreatePesagemDto) {

    const pesagem = await this.prisma.pesagem.create({
      data: {
        peso: dados.peso,
        status: dados.status,
      },
    });

    this.websocketGateway.enviarPesagem(pesagem);

    return pesagem;

  }

  async listarPesagens() {
    return await this.prisma.pesagem.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

}
