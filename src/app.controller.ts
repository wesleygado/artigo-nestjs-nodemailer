import { Controller, Get, Post, Render, Request } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('email')
  @Render('form')
  exibirForm() {
    //
  }

  @Post('enviar-email')
  enviarEmail(@Request() req) {
    console.log(req.body.email);
    return this.appService.enviarEmail(req.body.email, req.body.mensagem);
  }
}
