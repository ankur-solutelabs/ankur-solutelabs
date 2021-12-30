import { DeliveryBoyEntity, DeliveryEntity } from '../../../app/delivery/entity';
import { ConnectionOptions } from 'typeorm';
import { DATABASE_URL, ENVIRONMENT } from '../../environment';

const config: ConnectionOptions = {
  type: 'postgres',
  url: DATABASE_URL,
  entities: ["dist/**/*.entity{.ts,.js}"],
  logging: ENVIRONMENT === 'local',
  synchronize: true,
}

export = config;
