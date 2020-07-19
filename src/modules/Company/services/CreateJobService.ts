import { injectable, inject } from 'tsyringe';
import AppError from '@shared/errors/AppError';
import IJobsRepository from '../repositories/IJobsRepository';
import Job from '../infra/typeorm/entities/Job';
import ICompaniesRepository from '../repositories/ICompaniesRepository';

interface IRequest {
  title: string;
  description: string;
  job_model: string;
  salary: number;
  company_id: number;
  occupation_area: number;
}

@injectable()
class CreateJobSerivce {
  constructor(
    @inject('JobsRepository')
    private jobsRepository: IJobsRepository,
    @inject('CompaniesRepository')
    private companiesRepository: ICompaniesRepository,
  ) {}

  public async execute({
    title,
    salary,
    occupation_area,
    job_model,
    description,
    company_id,
  }: IRequest): Promise<Job> {
    const checkCompanyExists = await this.companiesRepository.findById(
      company_id,
    );

    if (!checkCompanyExists) {
      throw new AppError('Company does not exists.');
    }

    const job = await this.jobsRepository.create({
      title,
      company_id,
      description,
      job_model,
      occupation_area,
      salary,
    });

    return job;
  }
}

export default CreateJobSerivce;
