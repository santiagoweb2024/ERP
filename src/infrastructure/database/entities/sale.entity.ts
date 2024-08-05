import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { SaleDetailEntity } from './saleDetail.entity';

@Entity('sale')
export class SaleEntity {
  @PrimaryGeneratedColumn()
  saleId: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  total: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;

  // Relaciones
  @OneToMany(() => SaleDetailEntity, (detail) => detail.sale)
  saleDetails: SaleDetailEntity[];
}
