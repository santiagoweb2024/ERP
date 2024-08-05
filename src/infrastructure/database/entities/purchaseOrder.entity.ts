import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  Index,
} from 'typeorm';
import { PurchaseOrderDetailEntity } from './purchaseOrderDetail.entity';

@Entity('purchase_order')
@Index('supplierId', ['supplierId'])
export class PurchaseOrderEntity {
  @PrimaryGeneratedColumn()
  purchaseOrderId: number;

  @Column()
  supplierId: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  total: number;

  @Column({ length: 50 })
  status: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;

  // Relaciones
  @OneToMany(() => PurchaseOrderDetailEntity, (detail) => detail.purchaseOrder)
  purchaseOrderDetails: PurchaseOrderDetailEntity[];
}
