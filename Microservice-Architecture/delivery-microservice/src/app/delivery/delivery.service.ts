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


        async Delivery(createDeliveryCustomer: DeliveryDto): Promise<DeliveryEntity> {
         const createCustomer = await this.DeliveryRepository.create(createDeliveryCustomer)
         const saveUser = await this.DeliveryRepository.save(createCustomer);
        if (!saveUser) {
          throw new InternalServerErrorException(
            INTERNAL_SERVER_ERROR,
          );
        }   
        return saveUser
}

        async DeliveryBoy(createDeliveryBoy: DeliveryBoyDto): Promise<DeliveryBoyEntity> {
          const createBoy = await this.DeliveryBoyRepository.create(createDeliveryBoy)
          const saveBoy = await this.DeliveryBoyRepository.save(createBoy);
        if (!saveBoy) {
          throw new InternalServerErrorException(
            INTERNAL_SERVER_ERROR,
          );
        }   
        return saveBoy
        }

        

}
