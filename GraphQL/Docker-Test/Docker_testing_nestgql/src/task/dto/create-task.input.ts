import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateTaskInput {
  
@Field()
taskName: string

@Field()
code: number
}
