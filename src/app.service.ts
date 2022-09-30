import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(private mailerService: MailerService) {}

  async enviarEmail(email: string, mensagem: string) {
    await this.mailerService.sendMail({
      to: email, //email que está liberado no mailgun - 'wesley.gado@treinaweb.com.br'
      from: 'wesley.gado@treinaweb.com.br',
      subject: 'Enviando Email com NestJS',
      html: `<h3 style="color: red">${mensagem}</h3>`,
    });
  }
}
