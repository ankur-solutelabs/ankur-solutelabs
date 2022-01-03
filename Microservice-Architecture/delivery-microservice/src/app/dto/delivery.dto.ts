import { Field, InputType} from '@nestjs/graphql';

@InputType()
export class DeliveryDto {
  @Field()
  customerName: string;

  @Field()
  customerOrder: string;

  @Field()
  customerAddress: string;

  @Field()
  customerMob: number;

  @Field()
  customerStatus: string;

}
