import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn } from "typeorm";
import Occupation from "../../../../Occupation/infra/typeorm/entities/Occupation";

@Entity('candidates')
class Candidate {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  occupation_area: number;

  @OneToOne(() => Occupation)
  @JoinColumn({ name: 'occupation_area' })
  occupation: Occupation;

  @Column()
  name: string;

  @Column()
  last_job: string;

  @Column()
  email: string;

  @Column()
  whatsapp: string;

  @Column()
  linkedin: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Candidate;
