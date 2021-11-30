import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { EventController } from './event/event.controller';
import { EventService } from './event/event.service';
import { EventModule } from './event/event.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig),
    AuthModule,
    EventModule
  ],
  controllers: [AppController, EventController],
  providers: [AppService, EventService],
})
export class AppModule {}
