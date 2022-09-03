import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import helmet from 'helmet';
import { AppModule } from './app.module';
import { GlobalExceptionsFilter } from './core';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter({ logger: true }),
    { cors: true },
  );

  // Validation Pipe
  app.useGlobalPipes(new ValidationPipe());

  // Exception Handling
  const httpAdapter = app.get(HttpAdapterHost);
  app.useGlobalFilters(new GlobalExceptionsFilter(httpAdapter));

  // Security: Helmet
  app.use(helmet());
  await app.listen(new ConfigService().get('port'), '0.0.0.0');
}
bootstrap();
