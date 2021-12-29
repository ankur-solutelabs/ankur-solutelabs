import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class DeliveryBoyDto {
  @Field()
  name: string;

  @Field()
  rating: number;

}