import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('occupations')
class Occupation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}

export default Occupation;
