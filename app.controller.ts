import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {

  @Get()
  getStatus() {
    return {
      status: 'online',
      render: true,
      websocket: true,
    };
  }
}
