import { Args, Mutation, Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { DeliveryBoyDto, DeliveryDto } from '../dto';
import { DeliveryService } from './delivery.service';
import { DeliveryBoyEntity, DeliveryEntity } from './entity';

@Resolver(() => DeliveryEntity)
export class DeliveryResolver {

    constructor(private readonly DeliveryService: DeliveryService){}

    @Mutation(() => DeliveryEntity)
    createDelivery(@Args('createDelivery') customer:DeliveryDto ) {
        return this.DeliveryService.createDelivery(customer);
    }

}

@Resolver(() => DeliveryBoyEntity)
export class DeliveryBoyResolver {
  constructor(private readonly deliveryService: DeliveryService) {}

  @Mutation(() => DeliveryBoyEntity)
  DeliveryBoy(@Args('DeliveryBoy') createDeliveryBoy: DeliveryBoyDto) {
    return this.deliveryService.DeliveryBoy(createDeliveryBoy);
  }

  @Mutation(() => DeliveryBoyEntity)
  updateBoy(@Args('updateDeliveryBoy') updateDeliveryBoy: DeliveryBoyEntity) {
    return this.deliveryService.updateBoy(updateDeliveryBoy.id,updateDeliveryBoy);
  }

  @Mutation(() => DeliveryBoyEntity)
  removeBoy(@Args('id', { type: () => String }) id: string) {
    return this.deliveryService.removeBoy(id);
  }
}

