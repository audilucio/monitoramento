import { Module } from '@nestjs/common';

import { BalancaController } from './balanca.controller';
import { BalancaService } from './balanca.service';

import { PrismaModule } from '../prisma/prisma.module';
import { WebsocketModule } from '../websocket/websocket.module';

@Module({
  imports: [
    PrismaModule,
    WebsocketModule,
  ],

  controllers: [BalancaController],

  providers: [BalancaService],
})

export class BalancaModule {}
