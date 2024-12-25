// Table for DB
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Candidate {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column({ nullable: true })
  phone?: string;

  @Column({ type: 'date', nullable: true })
  dateOfBirth?: string;

  @Column({ nullable: true })
  sex?: string;

  @Column({ nullable: true })
  title?: string;

  @Column({ nullable: true, type: 'int' })
  yearsOfExp?: number;
}
