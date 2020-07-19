import { injectable, inject } from 'tsyringe';
import IJobsRepository from '../repositories/IJobsRepository';
import Job from '../infra/typeorm/entities/Job';

@injectable()
class FindByOccupationJobService {
  constructor(
    @inject('JobsRepository')
    private jobsRepository: IJobsRepository,
  ) {}

  public async execute(id: number): Promise<Job[] | undefined> {
    const jobs = await this.jobsRepository.findByOccupation(id);

    return jobs;
  }
}

export default FindByOccupationJobService;
