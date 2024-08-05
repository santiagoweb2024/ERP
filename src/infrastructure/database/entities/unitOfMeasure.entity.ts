import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('unit_of_measure')
export class UnitOfMeasureEntity {
  @PrimaryGeneratedColumn()
  unitOfMeasureId: number;

  @Column({ length: 255 })
  name: string;

  @Column({ length: 50 })
  abbreviation: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;
}
