import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DeliveryBoyResolver, DeliveryResolver, DeliveryService } from '.';
import { DeliveryBoyEntity, DeliveryEntity } from './entity';

@Module({


    imports: [TypeOrmModule.forFeature([DeliveryEntity,DeliveryBoyEntity])],
    providers: [DeliveryResolver, DeliveryBoyResolver,DeliveryService],
    exports: [DeliveryService],

})
export class DeliveryModule {
      


    
}
