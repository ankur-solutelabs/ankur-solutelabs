import { Query } from '@nestjs/common';
import { Args, Mutation, Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { DeliveryService } from '.';
import { DeliveryDto } from '../dto';
import { DeliveryBoyEntity, DeliveryEntity } from './entity';
import { DeliveryResponse } from '../interface'

@Resolver()
export class DeliveryResolver {

    constructor(private DeliveryService: DeliveryService){}

    @Mutation(() => DeliveryEntity, {name: "createCustomer"})
    createCustomer(@Args('delivery') customer:DeliveryDto ) {
        return this.DeliveryService.Delivery(customer)
    }

    @ResolveField(() => DeliveryBoyEntity)
    Delivery(@Parent() customer:DeliveryEntity){
        return this.DeliveryService.getDeliveryBoy(customer.id)

    }

}

@Resolver(() => DeliveryBoyEntity)
export class DeliveryBoyResolver {
  constructor(private readonly deliveryService: DeliveryService) {}

  @Mutation(() => DeliveryBoyEntity)
  createBoy(@Args('createDeliveryBoy') createDeliveryBoy: DeliveryBoyEntity) {
    return this.deliveryService.DeliveryBoy(createDeliveryBoy);
  }

  @Mutation(() => DeliveryBoyEntity)
  updateBoy(@Args('updateDeliveryBoy') updateDeliveryBoy: DeliveryBoyEntity) {
    return this.deliveryService.updateBoy(updateDeliveryBoy.id, updateDeliveryBoy);
  }

  @Mutation(() => DeliveryBoyEntity)
  removeBoy(@Args() id) {
    return this.deliveryService.DeliveryBoy(id);
  }
}

