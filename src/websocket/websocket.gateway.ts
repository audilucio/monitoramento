import {
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';

import { Server } from 'socket.io';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})

export class WebsocketGateway {

  @WebSocketServer()
  server: Server;

  enviarPesagem(dados: any) {
    this.server.emit('nova-pesagem', dados);
  }

}
