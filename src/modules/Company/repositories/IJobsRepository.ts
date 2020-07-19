import ICreateJobDTO from '../dtos/ICreateJobDTO';
import Job from '../infra/typeorm/entities/Job';

export default interface IJobsRepository {
  findAll(): Promise<Job[]>;
  findByOccupation(id: number): Promise<Job[] | undefined>;
  create(data: ICreateJobDTO): Promise<Job>;
  save(job: Job): Promise<Job>;
}
