import { Field, ObjectType } from "@nestjs/graphql"
import { Task } from "src/task/entities/task.entity"
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"


@ObjectType()
@Entity()
export class Employee {

    @Field()
    @PrimaryGeneratedColumn()
    id: number

    @Field()
    @Column()
    firstName: string

    @Field()
    @Column()
    lastName: string

    @Field()
    @Column()
    designation: string
 
    @Field({ nullable: true}) 
    @Column({ nullable: true})
    city: string

    @ManyToOne(() => Task, task => task.employee)
    @Field( () => Task)
    task: Task

    @Column()
    @Field()
    taskId: number

}