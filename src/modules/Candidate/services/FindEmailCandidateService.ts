import { inject, injectable } from 'tsyringe';
import ICandidateRepository from '../repositories/ICandidateRepository';
import Candidate from '../infra/typeorm/entities/Candidate';

@injectable()
class FindEmailCandidateService {
  constructor(
    @inject('CandidatesRepository')
    private candidatesRepository: ICandidateRepository
  ) {}

  public async execute(email: string): Promise<Candidate | undefined> {
    const candidate = await this.candidatesRepository.findByEmail(email);

    return candidate;
  }
}

export default FindEmailCandidateService;
