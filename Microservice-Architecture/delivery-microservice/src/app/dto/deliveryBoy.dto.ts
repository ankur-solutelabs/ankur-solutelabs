import { Field, InputType, ObjectType } from '@nestjs/graphql';

@InputType()
export class DeliveryBoyDto {
  @Field()
  name: string;

  @Field()
  mobileNo: number;

  @Field()
  rating: number;

}