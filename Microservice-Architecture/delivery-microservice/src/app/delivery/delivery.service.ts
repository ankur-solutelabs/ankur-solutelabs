import {
    Injectable,
    InternalServerErrorException,
    NotFoundException,
  } from '@nestjs/common';
import { DeliveryDto,DeliveryBoyDto } from '../dto';
import {INTERNAL_SERVER_ERROR} from '../../core/error';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DeliveryBoyEntity, DeliveryEntity } from './entity';

@Injectable()
export class DeliveryService {
    constructor(
        @InjectRepository(DeliveryEntity)
        private DeliveryRepository: Repository<DeliveryEntity>,

        @InjectRepository(DeliveryBoyEntity)
        private DeliveryBoyRepository: Repository<DeliveryBoyEntity>
        
        ) {}


        async Delivery(createDeliveryCustomer: DeliveryDto): Promise<DeliveryEntity> {
         const createCustomer = this.DeliveryRepository.create(createDeliveryCustomer)
         const saveUser = await this.DeliveryRepository.save(createCustomer);
        if (!saveUser) {
          throw new InternalServerErrorException(
            INTERNAL_SERVER_ERROR,
          );
        }   
        return saveUser
}

        async DeliveryBoy(createDeliveryBoy: DeliveryBoyDto): Promise<DeliveryBoyEntity> {
          const createBoy = this.DeliveryBoyRepository.create(createDeliveryBoy)
          const saveBoy = await this.DeliveryBoyRepository.save(createBoy);
        if (!saveBoy) {
          throw new InternalServerErrorException(
            INTERNAL_SERVER_ERROR,
          );
        }   
        return saveBoy
        }
//========================================================================================================//
    //Delivery Service Customer 

        async findAllCustomer() :Promise<DeliveryEntity[]> {
          return this.DeliveryRepository.find();
        }
      
        async findOneCustomer(id: string):Promise<DeliveryEntity> {
          return this.DeliveryRepository.findOne(id);
        }

        async getDeliveryBoy(id: string):Promise<DeliveryBoyEntity> {
          return this.DeliveryBoyRepository.findOne(id)
      }

//========================================================================================================//
   // Delivery service Delivery Boy
     
      
        async findAllBoy() :Promise<DeliveryBoyEntity[]> {
          return this.DeliveryBoyRepository.find({
            relations: ["delivery"]
          });
}

    
        async findOneBoy(id: string):Promise<DeliveryBoyEntity> {
        return this.DeliveryBoyRepository.findOne(id,{relations:["delivery"]});
        }
    
        async updateBoy(id: string, updateDeliveryBoy: DeliveryBoyDto) {
          const DBoy:DeliveryBoyEntity = this.DeliveryBoyRepository.create(updateDeliveryBoy)
          DBoy.id = id;
          return this.DeliveryBoyRepository.save(DBoy)
        }

        async removeBoy(id: string) {
          let remBoy = this.DeliveryBoyRepository.findOne(id)
          if (remBoy) {
            let ret = await this.DeliveryBoyRepository.delete(id)
            if (ret.affected === 1) {
              return remBoy;
            }
          }
          throw new NotFoundException(`Record can't find by id ${id}`)
        }
 }
