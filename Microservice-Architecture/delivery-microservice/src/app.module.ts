import {
  BadRequestException,
  Module,
  ValidationError,
  ValidationPipe,
} from '@nestjs/common';
import { HealthController } from './health.controller';
import { TerminusModule } from '@nestjs/terminus';
import { APP_PIPE } from '@nestjs/core';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphqlService } from './core/config';
import { AppResolver } from './app.resolver';
import * as ormconfig from './core/config/typeorm';
import { join } from 'path/posix';
import { DeliveryModule } from './app/delivery/delivery.module';

@Module({
  imports: [DeliveryModule,
    TypeOrmModule.forRoot(ormconfig),
    GraphQLModule.forRootAsync({
      useClass: GraphqlService,
    }),
    TerminusModule,
    // GraphQLModule.forRoot(
    //   { autoSchemaFile: join(process.cwd(), 'src/graphql-schema.gql'),}),
  ],
  controllers: [HealthController],
  providers: [
    {
      provide: APP_PIPE,
      useValue: new ValidationPipe({
        exceptionFactory: (error: ValidationError[]) =>
          new BadRequestException(error),
      }),
    },
    AppResolver,

  ],
})
export class AppModule {}
