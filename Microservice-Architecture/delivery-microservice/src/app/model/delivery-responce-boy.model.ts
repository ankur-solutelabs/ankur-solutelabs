import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class DeliveryBoy {

  @Field()
  name: string;

  @Field()
  mobileNo: number;

  @Field()
  rating: number;
}