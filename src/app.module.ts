import { MailerModule } from '@nestjs-modules/mailer';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        host: 'smtp.mailgun.org',
        secure: false,
        port: 587,
        auth: {
          user: 'postmaster@sandbox4b3364e399ae4743ac2e6a4d271c0efe.mailgun.org',
          pass: '16f4e02b8b8b34d3c058a4a3c29692c7-4534758e-35bd9cbe',
        },
        ignoreTLS: true,
      },
      defaults: {
        from: '"No Reply" <noreply@ediaristas.com>',
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
