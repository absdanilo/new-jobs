import { injectable, inject } from 'tsyringe';
import IJobsRepository from '../repositories/IJobsRepository';
import Job from '../infra/typeorm/entities/Job';

@injectable()
class FindAllJobsService {
  constructor(
    @inject('JobsRepository')
    private jobsRepository: IJobsRepository,
  ) {}

  public async execute(): Promise<Job[] | undefined> {
    const jobs = await this.jobsRepository.findAll();
    return jobs;
  }
}

export default FindAllJobsService;
