import { BaseEntity } from '../../utility/entity';
import { Entity, Column } from 'typeorm';
import { VALUE } from '../../../core/constant'

@Entity('delivery')
export class deliveryEntity extends BaseEntity {
  @Column('text')
  customerName: string;

  @Column('text')
  customerOrder: string;

  @Column('text')
  customerAddress: string;

  @Column('text', {default:'accepted'})
  customerStatus: VALUE;

  
}
