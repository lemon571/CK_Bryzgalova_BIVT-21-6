import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { HttpExceptionFilter } from './exceptions/http-exeption.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new HttpExceptionFilter());
  const config = new DocumentBuilder()
    .setTitle('Education API')
    .setVersion('1.0')
    .build(); // Конфигурируем сборщик документации
  const document = SwaggerModule.createDocument(app, config); // создаем апи документацию
  SwaggerModule.setup('api_docs', app, document); //включаем документацию Swagger по пути localhost:3001/api_docs
  await app.listen(3005); //устанавливаем порт прослушивания 3005
  await app.setGlobalPrefix('/api'); //глобальный префикс для роутов контроллера
  app.useGlobalPipes(new ValidationPipe());
}
bootstrap();
