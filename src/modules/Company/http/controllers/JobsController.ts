import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateJobSerivce from '@modules/Company/services/CreateJobService';
import FindByOccupationJobService from '@modules/Company/services/FindByOccupationJobService';
import FindAllJobsService from '@modules/Company/services/FindAllJobsService';

export default class JobsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { title, salary, occupation_area, job_model, description, company_id  } = request.body;
    const createJob = await container.resolve(CreateJobSerivce);

    const job = await createJob.execute({
      title,
      salary,
      occupation_area,
      job_model,
      description,
      company_id
    });

    return response.json(job);
  }

  public async findByOccupation(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const findByOccupationJob = await container.resolve(FindByOccupationJobService);

    const jobs = await findByOccupationJob.execute(Number(id));

    return response.json(jobs);
  }

  public async findAllJobs(_: Request, response: Response): Promise<Response> {
    const findAllJobs = await container.resolve(FindAllJobsService);

    const jobs = await findAllJobs.execute();

    return response.json(jobs);
  }
}
