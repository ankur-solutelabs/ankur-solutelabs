import {
    Injectable,
    UnauthorizedException,
    BadRequestException,
    InternalServerErrorException,
    Inject,
    Logger,
    NotFoundException,
  } from '@nestjs/common';
import { DeliveryDto,DeliveryBoyDto } from '../dto';
import {INTERNAL_SERVER_ERROR} from '../../core/error';
import { InjectRepository } from '@nestjs/typeorm';
import { getRepository, Repository } from 'typeorm';
import { DeliveryBoyEntity, DeliveryEntity } from './entity';
import { ClientProxy } from '@nestjs/microservices';
import { VALUE } from 'src/core/constant';

@Injectable()
export class DeliveryService {
    constructor(
        @InjectRepository(DeliveryEntity)
        private DeliveryRepository: Repository<DeliveryEntity>,

        @InjectRepository(DeliveryBoyEntity)
        private DeliveryBoyRepository: Repository<DeliveryBoyEntity>
        
        ) {}


        async Delivery(data: DeliveryDto): Promise<any> {
        
            const createCustomer = this.DeliveryRepository.create({
                // customerName = "ankur",
                // customerOrder = "dosa",
                // customerAddress = "gorakhpur",
                // customerMob = 12345678995,
                // customerStatus = VALUE.ACCEPTED,
            });
        
            const saveUser = await this.DeliveryRepository.save(createCustomer);
        
            if (!saveUser) {
              throw new InternalServerErrorException(
                INTERNAL_SERVER_ERROR,
              );
            }   
}
}
