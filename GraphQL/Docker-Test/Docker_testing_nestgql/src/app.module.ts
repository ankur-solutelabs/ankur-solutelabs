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
    port: 5432,
    username: "postgres" ,
    // process.env.POSTGRES_USER,
    password:"ankur@123" ,
    // process.env.POSTGRES_PASSWORD,
    entities: ["dist/**/*.entity{.ts,.js}"],
    synchronize: true,
  }),
  TaskModule

],
  controllers: [],
  providers: [],
})
export class AppModule {}
