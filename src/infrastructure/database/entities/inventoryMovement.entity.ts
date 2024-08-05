import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  Index,
} from 'typeorm';
import { ProductEntity } from './product.entity';

@Entity('inventory_movement')
@Index('productId', ['productId'])
export class InventoryMovementEntity {
  @PrimaryGeneratedColumn()
  inventoryMovementId: number;

  @Column()
  productId: number;

  @Column({ type: 'float' })
  quantity: number;

  @Column({ length: 50 })
  type: string;

  @Column({ length: 255 })
  reason: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  date: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;

  // Relaciones
  @ManyToOne(() => ProductEntity, (product) => product.inventoryMovements)
  product: ProductEntity;
}
