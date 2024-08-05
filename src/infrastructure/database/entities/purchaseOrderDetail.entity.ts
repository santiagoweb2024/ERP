import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  Index,
} from 'typeorm';
import { PurchaseOrderEntity } from './purchaseOrder.entity';
import { ProductEntity } from './product.entity';

@Entity('purchase_order_detail')
@Index('purchaseOrderId', ['purchaseOrderId'])
@Index('productId', ['productId'])
export class PurchaseOrderDetailEntity {
  @PrimaryGeneratedColumn()
  purchaseOrderDetailId: number;

  @Column()
  purchaseOrderId: number;

  @Column()
  productId: number;

  @Column({ type: 'float' })
  quantity: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  purchasePrice: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;

  // Relaciones
  @ManyToOne(() => PurchaseOrderEntity, (order) => order.purchaseOrderDetails)
  purchaseOrder: PurchaseOrderEntity;

  @ManyToOne(() => ProductEntity, (product) => product.purchaseOrderDetails)
  product: ProductEntity;
}
