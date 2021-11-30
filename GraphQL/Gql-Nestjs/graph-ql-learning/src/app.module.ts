import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path/posix';
import { EmployeeModule } from './employee/employee.module';
import { TaskModule } from './task/task.module';
@Module({
  imports: [EmployeeModule,GraphQLModule.forRoot(
   { autoSchemaFile: join(process.cwd(), 'src/graphql-schema.gql'),}
  ),
  TypeOrmModule.forRoot({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "ankur@123",
    entities: ["dist/**/*.entity{.ts,.js}"],
    synchronize: true,
  }),
  TaskModule

],
  controllers: [],
  providers: [],
})
export class AppModule {}
