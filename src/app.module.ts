import { Module } from '@nestjs/common';
import { BalancaModule } from './balanca/balanca.module';
import { WebsocketModule } from './websocket/websocket.module';

@Module({
  imports: [
    BalancaModule,
    WebsocketModule,
  ],
})
export class AppModule {}
