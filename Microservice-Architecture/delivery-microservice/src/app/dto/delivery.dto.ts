import { Field, InputType, ObjectType } from '@nestjs/graphql';

@InputType()
export class DeliveryDto {
  @Field()
  customerName: string;

  @Field()
  customerOrder: string;

  @Field()
  customerAddress: string;

  @Field()
  customerStatus: string;

  @Field()
  customerMob: number;


}
