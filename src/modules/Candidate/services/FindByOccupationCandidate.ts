import { inject, injectable } from 'tsyringe';
import ICandidateRepository from '../repositories/ICandidateRepository';
import Candidate from '../infra/typeorm/entities/Candidate';

@injectable()
class FindByOccupationCandidateService {
  constructor(
    @inject('CandidatesRepository')
    private candidatesRepository: ICandidateRepository,
  ) {}

  public async execute(id: number): Promise<Candidate[] | undefined> {
    const candidates = await this.candidatesRepository.findByOcuppation(id);

    return candidates;
  }
}

export default FindByOccupationCandidateService;
