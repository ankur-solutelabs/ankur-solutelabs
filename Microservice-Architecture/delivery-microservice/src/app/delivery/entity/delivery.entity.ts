import { BaseEntity } from '../../utility/entity';
import { Entity, Column } from 'typeorm';

@Entity('delivery')
export class DeliveryEntity extends BaseEntity {
  @Column('text')
  customerName: string;

  @Column('text')
  customerOrder: string;

  @Column('text')
  customerAddress: string;

  @Column('text')
  customerMob: number;

  @Column('text')
  customerStatus: string;

  
}
