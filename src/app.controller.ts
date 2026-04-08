import { Controller, Get, Render } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  @Render('index')
  home() {
    return {
      title: 'Portafolio de Daniel',
      name: 'Daniel',
      role: 'Desarrollador',
    };
  }
}
