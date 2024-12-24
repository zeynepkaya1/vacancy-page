import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Vacancy {
  @PrimaryGeneratedColumn('uuid')
  uuid: string;

  @CreateDateColumn({ precision: 3 })
  createdAt: Date;

  @UpdateDateColumn({ precision: 3 })
  updatedAt: Date;

  @Column({ type: 'varchar' })
  company: string;

  @Index()
  @Column({ type: 'varchar' })
  title: string;

  @Column({ type: 'varchar', nullable: true })
  description: string | null;

  @Index()
  @Column({ type: 'date', nullable: true })
  startDate: string | null;

  @Index()
  @Column({ type: 'date', nullable: true })
  endDate: string | null;
}
