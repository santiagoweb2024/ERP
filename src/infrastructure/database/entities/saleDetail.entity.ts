import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  Index,
} from 'typeorm';
import { SaleEntity } from './sale.entity';
import { ProductEntity } from './product.entity';

@Entity('sale_detail')
@Index('saleId', ['saleId'])
@Index('productId', ['productId'])
export class SaleDetailEntity {
  @PrimaryGeneratedColumn()
  saleDetailId: number;

  @Column()
  saleId: number;

  @Column()
  productId: number;

  @Column({ type: 'float' })
  quantity: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  salePrice: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;

  // Relaciones
  @ManyToOne(() => SaleEntity, (sale) => sale.saleDetails)
  sale: SaleEntity;

  @ManyToOne(() => ProductEntity, (product) => product.saleDetails)
  product: ProductEntity;
}
