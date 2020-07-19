import { getRepository, Repository } from "typeorm";
import IOccupationRepository from "@modules/Occupation/repositories/IOcuppationRepository";
import Occupation from "../entities/Occupation";

class OccupationRepository implements IOccupationRepository {
  private ormRepository: Repository<Occupation>

  constructor() {
    this.ormRepository = getRepository(Occupation);
  }
  public async findAll(): Promise<Occupation[]> {
    const occupations = await this.ormRepository.find();
    return occupations;
  }
  public async findByName(name: string): Promise<Occupation | undefined> {
    const occupation = await this.ormRepository.findOne({
      where: { name }
    });

    return occupation;
  }
  public async create(name: string): Promise<Occupation> {
    const occupation = await this.ormRepository.create({
      name
    });

    await this.ormRepository.save(occupation);
    return occupation;
  }
  public async save(occupation: Occupation): Promise<Occupation> {
   return this.ormRepository.save(occupation);
  }
}

export default OccupationRepository;
