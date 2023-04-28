import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity('ErrorOc')
export class ErrorOc extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @CreateDateColumn()
  created_at: Date;
  timestamp: Date;
}
