import { Args, Mutation, Resolver,Query } from '@nestjs/graphql';
import { DeliveryBoyDto, DeliveryDto } from '../dto';
import { DeliveryService } from './delivery.service';
import { DeliveryBoyEntity, DeliveryEntity } from './entity';

@Resolver(() => DeliveryEntity)
export class DeliveryResolver {

    constructor(private readonly DeliveryService: DeliveryService){}

    @Query(() => [DeliveryEntity],{ name:"getDelivery" } )
    findAll(){
      return this.DeliveryService.findAllCustomer()
    }

    @Mutation(() => DeliveryEntity, { name:"createDelivery" } )
    async createDelivery(@Args('createDelivery') customer:DeliveryDto ) {
        return await this.DeliveryService.createDelivery(customer);
    }

    @Query(() => DeliveryEntity , { name:"getOneDelivery" }) 
    findOne(@Args("id") id: string) {
        return this.DeliveryService.findOneCustomer(id)

    }


}

@Resolver(() => DeliveryBoyEntity)
export class DeliveryBoyResolver {
  constructor(private readonly deliveryService: DeliveryService) {}


  @Query(() => DeliveryBoyEntity , { name:"getAllDeliveryBoy" }) 
  findAll() {
      return this.deliveryService.findAllBoy()

  }

  @Mutation(() => DeliveryBoyEntity,{ name:"createDeliveryBoy" })
  async DeliveryBoy(@Args('DeliveryBoy') createDeliveryBoy: DeliveryBoyDto) {
    return await this.deliveryService.createDeliveryBoy(createDeliveryBoy);
  }

  @Query(() => DeliveryBoyEntity , { name:"getOneDeliveryBoy" }) 
  findOne(@Args("id") id: string) {
      return this.deliveryService.findOneBoy(id)

  }

  @Mutation(() => DeliveryBoyEntity, { name:"updateDeliveryBoy" })
  updateBoy(@Args('updateDeliveryBoy') updateDeliveryBoy: DeliveryBoyEntity) {
    return this.deliveryService.updateBoy(updateDeliveryBoy.id,updateDeliveryBoy);
  }

  @Mutation(() => DeliveryBoyEntity,{ name:"deleteDeliveryBoy" })
  removeBoy(@Args('id', { type: () => String }) id: string) {
    return this.deliveryService.removeBoy(id);
  }
}

