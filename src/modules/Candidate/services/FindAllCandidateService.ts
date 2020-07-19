import { inject, injectable } from 'tsyringe';
import ICandidateRepository from '../repositories/ICandidateRepository';
import Candidate from '../infra/typeorm/entities/Candidate';

@injectable()
class FindAllCandidateService {
  constructor(
    @inject('CandidatesRepository')
    private candidatesRepository: ICandidateRepository,
  ) {}

  public async execute(): Promise<Candidate[] | undefined> {
    const candidates = await this.candidatesRepository.findAll();
    return candidates;
  }
}

export default FindAllCandidateService;
