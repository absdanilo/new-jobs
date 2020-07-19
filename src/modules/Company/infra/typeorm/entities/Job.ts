import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import Occupation from '@modules/Occupation/infra/typeorm/entities/Occupation';
import Company from './Company';

@Entity('jobs')
class Job {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  company_id: number;

  @ManyToOne(() => Company)
  @JoinColumn({ name: 'company_id' })
  company: Company;

  @Column()
  occupation_area: number;

  @ManyToOne(() => Occupation)
  @JoinColumn({ name: 'occupation_area' })
  occupation: Occupation;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  salary: number;

  @Column()
  job_model: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Job;
