import { inject, injectable } from 'tsyringe';
import ICandidateRepository from '../repositories/ICandidateRepository';
import Candidate from '../infra/typeorm/entities/Candidate';
import AppError from '@shared/errors/AppError';

interface IRequest {
  name: string;
  email: string;
  whatsapp: string;
  linkedin: string;
  lastJob: string;
  occupation_area: number;
}

@injectable()
class CreateCandidateService {
  constructor(
    @inject('CandidatesRepository')
    private candidatesRepository: ICandidateRepository
  ) {}

  public async execute({ name, email, whatsapp, linkedin, lastJob, occupation_area }: IRequest): Promise<Candidate> {
    const checkCandidateExists = await this.candidatesRepository.findByEmail(email);

    if(checkCandidateExists) {
      throw new AppError('Email addres already used.');
    }

    const candidate = await this.candidatesRepository.create({
      name,
      email,
      whatsapp,
      linkedin,
      lastJob,
      occupation_area
    });

    return candidate;
  }
}

export default CreateCandidateService;
