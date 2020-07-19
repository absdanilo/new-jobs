import ICandidatesService from "@modules/Candidate/repositories/ICandidateRepository";
import { Repository, getRepository } from "typeorm";
import Candidate from "../entities/Candidate";
import ICreateCandidateDTO from "@modules/Candidate/dtos/ICreateCandidateDTO";

class CandidateRepository implements ICandidatesService {
  private ormRepository: Repository<Candidate>;

  constructor() {
    this.ormRepository = getRepository(Candidate);
  }
  public async delete(id: number): Promise<void> {
    await this.ormRepository.delete(id);
  }
  public async findByEmail(email: string): Promise<Candidate | undefined> {
    const candidate = await this.ormRepository.findOne({
      where: { email }
    });

    return candidate;
  }
  public async create({
    name,
    email,
    whatsapp,
    linkedin,
    lastJob,
    occupation_area
  }: ICreateCandidateDTO): Promise<Candidate> {
    const candidate = await this.ormRepository.create({
      name,
      email,
      whatsapp,
      linkedin,
      last_job: lastJob,
      occupation_area
    });

    await this.ormRepository.save(candidate);
    return candidate;
  }
  public async save(candidate: Candidate): Promise<Candidate> {
    return this.ormRepository.save(candidate);
  }
}

export default CandidateRepository;
