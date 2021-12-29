import * as dotenv from 'dotenv';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { PORT, REDIS_URL, DELIVERY_QUEUE } from './core/environment';
import { start } from './index';
import { Transport } from '@nestjs/microservices';



dotenv.config();


async function bootstrap() {
  await start();

  const app = await NestFactory.create(AppModule);

  app.connectMicroservice({
    transport: Transport.REDIS,
    options: {
      url: REDIS_URL,
      queue: DELIVERY_QUEUE,
      queueOptions: {
        durable: false,
      },
    },
  });

  app.useGlobalPipes(new ValidationPipe());
  app.enableCors();

  await app.startAllMicroservices();
  await app.listen(PORT || 3000);
  Logger.debug(`ðŸš€  Server is listening on port ${PORT}`);
}

bootstrap().catch((e) => {
  Logger.error(`âŒ  Error starting server, ${e}`);
  throw e;
});

