import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as F from 'fs';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    httpsOptions: {
      key: F.readFileSync('./_auth/key.pem'),
      cert: F.readFileSync('./_auth/certificate.pem')
    },
    
    cors: true
  });

  await app.listen(process.env.PORT ?? 8500);
}
bootstrap();

