import Occupation from "../infra/typeorm/entities/Occupation";

export default interface IOccupationRepository {
  findAll(): Promise<Occupation[]>;
  findByName(name: string): Promise<Occupation | undefined>;
  create(name: string): Promise<Occupation>;
  save(occupation: Occupation): Promise<Occupation>;
}
