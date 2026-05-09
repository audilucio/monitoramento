import { Module } from '@nestjs/common';

import { AppController } from './app.controller';

import { BalancaModule } from './balanca/balanca.module';
import { WebsocketModule } from './websocket/websocket.module';

@Module({
  imports: [
    BalancaModule,
    WebsocketModule,
  ],

  controllers: [AppController],
})
export class AppModule {}
