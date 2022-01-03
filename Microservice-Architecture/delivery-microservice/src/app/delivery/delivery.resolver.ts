import { Args, Mutation, Resolver,Query } from '@nestjs/graphql';
import { DeliveryBoyDto, DeliveryDto } from '../dto';
import { DeliveryResponceModel } from '../model';
import { DeliveryService } from './delivery.service';
import { DeliveryBoyEntity, DeliveryEntity } from './entity';

@Resolver(() => DeliveryEntity)
export class DeliveryResolver {

    constructor(private readonly DeliveryService: DeliveryService){}

    @Query(() => [DeliveryResponceModel],{ name:"getDelivery" } )
    findAll(){
      return this.DeliveryService.findAllCustomer()
    }

    @Mutation(() => DeliveryResponceModel, { name:"createDelivery" } )
    async createDelivery(@Args('createDelivery') customer:DeliveryDto ) {
        return await this.DeliveryService.createDelivery(customer);
    }

    @Query(() => DeliveryResponceModel , { name:"getOneDelivery" }) 
    findOne(@Args("id") id: string) {
        return this.DeliveryService.findOneCustomer(id)

    }


}

@Resolver(() => DeliveryBoyEntity)
export class DeliveryBoyResolver {
  constructor(private readonly deliveryService: DeliveryService) {}


  @Query(() => DeliveryResponceModel, { name:"getAllDeliveryBoy" }) 
  findAll() {
      return this.deliveryService.findAllBoy()

  }

  @Mutation(() => DeliveryResponceModel,{ name:"createDeliveryBoy" })
  async DeliveryBoy(@Args('DeliveryBoy') createDeliveryBoy: DeliveryBoyDto) {
    return await this.deliveryService.createDeliveryBoy(createDeliveryBoy);
  }

  @Query(() => DeliveryResponceModel , { name:"getOneDeliveryBoy" }) 
  findOne(@Args("id") id: string) {
      return this.deliveryService.findOneBoy(id)

  }

  @Mutation(() => DeliveryResponceModel, { name:"updateDeliveryBoy" })
  updateBoy(@Args('updateDeliveryBoy') updateDeliveryBoy: DeliveryBoyDto) {
    return this.deliveryService.updateBoy(updateDeliveryBoy.name,updateDeliveryBoy);
  }

  @Mutation(() => DeliveryResponceModel,{ name:"deleteDeliveryBoy" })
  removeBoy(@Args('id', { type: () => String }) id: string) {
    return this.deliveryService.removeBoy(id);
  }
}

