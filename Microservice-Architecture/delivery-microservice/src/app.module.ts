import { Module } from '@nestjs/common';
import { AppResolver } from './app.resolver';

@Module({
  imports: [],
  controllers: [AppResolver],
  providers: [],
})
export class AppModule {}
