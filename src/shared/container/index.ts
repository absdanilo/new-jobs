import { container } from 'tsyringe';
import ICandidatesRepository from '@modules/Candidate/repositories/ICandidateRepository';
import CandidatesRepository from '@modules/Candidate/infra/typeorm/repositories/CandidateRepository';
import IOccupationRepository from '@modules/Occupation/repositories/IOcuppationRepository';
import OccupationRepository from '@modules/Occupation/infra/typeorm/repositories/OccupationRepository';
import ICompaniesRepository from '@modules/Company/repositories/ICompaniesRepository';
import CompaniesRepository from '@modules/Company/infra/typeorm/repositories/CompaniesRepository';
import IJobsRepository from '@modules/Company/repositories/IJobsRepository';
import JobsRepository from '@modules/Company/infra/typeorm/repositories/JobsRepository';

container.registerSingleton<IOccupationRepository>(
  'OccupationRepository',
  OccupationRepository,
);

container.registerSingleton<ICandidatesRepository>(
  'CandidatesRepository',
  CandidatesRepository,
);

container.registerSingleton<ICompaniesRepository>(
  'CompaniesRepository',
  CompaniesRepository,
);

container.registerSingleton<IJobsRepository>('JobsRepository', JobsRepository);
