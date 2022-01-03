import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DeliveryBoyResolver, DeliveryResolver } from './delivery.resolver';
import { DeliveryService } from './delivery.service';
import { DeliveryBoyEntity, DeliveryEntity } from './entity';

@Module({


    imports: [TypeOrmModule.forFeature([DeliveryEntity,DeliveryBoyEntity])],
    providers: [DeliveryResolver, DeliveryBoyResolver,DeliveryService],
    exports: [DeliveryService],

})
export class DeliveryModule {}
