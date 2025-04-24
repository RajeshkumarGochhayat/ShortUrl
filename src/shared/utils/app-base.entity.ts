import { Column, CreateDateColumn, Index } from 'typeorm';

export abstract class BaseAppEntity {
  @CreateDateColumn({ name: 'created_date', type: 'timestamp' })
  @Index()
  createdDate!: Date;

  @Column({ name: 'updated_date', nullable: true, type: 'timestamp' })
  @Index()
  updatedDate?: Date;
}
