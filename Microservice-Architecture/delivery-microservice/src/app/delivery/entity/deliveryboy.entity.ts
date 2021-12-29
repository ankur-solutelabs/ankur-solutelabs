import { BaseEntity } from '../../utility/entity';
import { Entity, Column } from 'typeorm';

@Entity('deliveryboy')
export class DeliveryBoyEntity extends BaseEntity {
  @Column('text')
  name: string;

  @Column('text')
  mobileNo: number;

  @Column('text', { default: 4.5 })
  rating: number;
}