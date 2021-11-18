import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
}
