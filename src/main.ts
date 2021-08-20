import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule); // root Module로 NestInstance 생성
  await app.listen(3000);
}
bootstrap();
