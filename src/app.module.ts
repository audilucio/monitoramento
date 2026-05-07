import { Module } from '@nestjs/common';
import { BalancaModule } from './balanca/balanca.module';
import { PrismaModule } from './prisma/prisma.module';
import { WebsocketModule } from './websocket/websocket.module';

@Module({
  imports: [
    BalancaModule,
    PrismaModule,
    WebsocketModule,
  ],
})
export class AppModule {}
