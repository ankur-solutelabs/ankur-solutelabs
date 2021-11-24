import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path/posix';
import { EmployeeModule } from './employee/employee.module';
import { TaskModule } from './task/task.module';
@Module({
  imports: [EmployeeModule,GraphQLModule.forRoot(
   { autoSchemaFile: join(process.cwd(), 'src/graphql-schema.gql'),}
  ),
  ConfigModule.forRoot({isGlobal: true}),
  TypeOrmModule.forRoot({
    type: "postgres",
    host: "localhost",
    port: 3000,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    // url: process.env.DATABASE_URL,
    entities: ["dist/**/*.entity{.ts,.js}"],
    synchronize: true,
  }),
  TaskModule

],
  controllers: [],
  providers: [],
})
export class AppModule {}
