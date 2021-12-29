import { BaseEntity } from '../../utility/entity';
import { Entity, Column } from 'typeorm';

@Entity('delivery')
export class deliveryEntity extends BaseEntity {
  @Column('text')
  name: string;

  @Column('number', { default: 4.5 })
  rating: number;
}
