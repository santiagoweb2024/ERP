import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  Index,
  OneToMany,
} from 'typeorm';
import { PurchaseOrderDetailEntity } from './purchaseOrderDetail.entity';
import { SaleDetailEntity } from './saleDetail.entity';
import { InventoryMovementEntity } from './inventoryMovement.entity';

@Entity('product')
@Index('categoryId', ['categoryId'])
@Index('unitOfMeasureId', ['unitOfMeasureId'])
export class ProductEntity {
  @PrimaryGeneratedColumn()
  productId: number;

  @Column({ length: 255 })
  productName: string;

  @Column()
  categoryId: number;

  @Column()
  unitOfMeasureId: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  purchasePrice: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  salePrice: number;

  @Column({ type: 'float' })
  stock: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;

  // Relaciones
  @OneToMany(() => PurchaseOrderDetailEntity, (detail) => detail.product)
  purchaseOrderDetails: PurchaseOrderDetailEntity[];

  @OneToMany(() => SaleDetailEntity, (detail) => detail.product)
  saleDetails: SaleDetailEntity[];

  @OneToMany(() => InventoryMovementEntity, (movement) => movement.product)
  inventoryMovements: InventoryMovementEntity[];
}
