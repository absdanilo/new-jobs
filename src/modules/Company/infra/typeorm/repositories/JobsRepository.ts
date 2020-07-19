import IJobsRepository from "@modules/Company/repositories/IJobsRepository";
import { Repository, getRepository } from "typeorm";
import Job from "../entities/Job";
import ICreateJobDTO from "@modules/Company/dtos/ICreateJobDTO";

class JobsRepository implements IJobsRepository {
  private ormRepository: Repository<Job>;

  constructor(){
    this.ormRepository = getRepository(Job);
  }
  public async findAll(): Promise<Job[]> {const jobs = await await this.ormRepository.find({
    select: ['id', 'title', 'description', 'job_model', 'salary'],
    relations: ['company', 'occupation'],
    order: {
      created_at: "DESC"
    }
  });

  return jobs;
  }
  public async findByOccupation(id: number): Promise<Job[] | undefined> {
    const jobs = await await this.ormRepository.find({
      where: {occupation_area: id},
      select: ['id', 'title', 'description', 'job_model', 'salary'],
      relations: ['company'],
      order: {
        created_at: 'DESC'
      }
    });

    return jobs;
  }
  public async create({ company_id, description, job_model, occupation_area, salary, title }: ICreateJobDTO): Promise<Job> {
    const job = await this.ormRepository.create({
      company_id,
      description,
      job_model,
      occupation_area,
      salary,
      title
    });

    await this.ormRepository.save(job);
    return job;
  }
  public async save(job: Job): Promise<Job> {
    return this.ormRepository.save(job);
  }
}

export default JobsRepository;
