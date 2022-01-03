import { Field, ObjectType } from '@nestjs/graphql';
import { DeliveryBoy } from './delivery-responce-boy.model';

@ObjectType()
export class DeliveryResponceModel{

    @Field()
    customerName: string;

    @Field()
    CustomerAddress: string;

    @Field()
    customerMob: string;

    @Field()
    customerOrder: string;

    @Field()
    customerStatus: string;


    @Field( () => DeliveryBoy)
    deliveryBoy: DeliveryBoy;


}