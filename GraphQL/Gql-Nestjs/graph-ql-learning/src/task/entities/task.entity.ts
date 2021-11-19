import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Employee } from 'src/employee/entities/employee.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Task {

  @Field()
  @PrimaryGeneratedColumn()
  id: number

  @Field()
  @Column()
  taskName: string

  @Field()
  @Column()
  code: number

  @OneToMany(() => Employee, employee => employee.task)
  @Field(() => [Employee],{nullable:true})
  employee: Employee


}
