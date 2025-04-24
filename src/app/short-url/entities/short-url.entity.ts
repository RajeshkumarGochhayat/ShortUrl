import { BaseAppEntity } from 'src/shared/utils/app-base.entity';
import { PrimaryGeneratedColumn, Column, Index, Entity } from 'typeorm';

@Entity()
export class ShortUrl extends BaseAppEntity {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  @Column({ unique: true, name: 'shortCode' })
  @Index()
  shortCode: string;

  @Column({ name: 'redirectUrl', type: 'varchar', length: 1000 })
  redirectUrl: string;
}
