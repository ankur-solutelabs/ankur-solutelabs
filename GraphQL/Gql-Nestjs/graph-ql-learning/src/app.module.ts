import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path/posix';
import { EmployeeModule } from './employee/employee.module';
@Module({
  imports: [EmployeeModule,GraphQLModule.forRoot(
   { autoSchemaFile: join(process.cwd(), 'src/graphql-schema.gql'),}
  ),
  TypeOrmModule.forRoot({
    type: "postgres",
    host: "localhost",
    port: 3000,
    username: "postgres",
    password: "ankur.p@solutelabs.com",
    entities: ["dist/**/*.entity{.ts,.js}"],
    synchronize: true,
  })

],
  controllers: [],
  providers: [],
})
export class AppModule {}
