import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const porta = 3311;
  await app.listen(porta, () => {
    console.log(`Backend is running in port ${porta}`);
  });
}
bootstrap();
