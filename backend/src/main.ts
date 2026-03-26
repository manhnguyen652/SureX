import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common'; // Thêm dòng này
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Thêm dòng này để kích hoạt DTO (class-validator)
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));

  await app.listen(3000); // Bạn có thể đổi sang port 8080 nếu muốn
}
bootstrap();