import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateTaskInput{

   @Field()
   id: number

   @Field()
   taskName: string

   @Field()
   code: number
}
