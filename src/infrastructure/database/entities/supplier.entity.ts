import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('supplier')
export class SupplierEntity {
  @PrimaryGeneratedColumn()
  supplierId: number;

  @Column({ length: 255 })
  name: string;

  @Column({ length: 255 })
  contactInfo: string;

  @Column({ length: 255 })
  address: string;

  @Column({ length: 50 })
  phone: string;

  @Column({ length: 255 })
  email: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;
}
