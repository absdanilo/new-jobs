import { inject, injectable } from 'tsyringe';
import ICandidateRepository from '../repositories/ICandidateRepository';

@injectable()
class DeleteCandidateService {
  constructor(
    @inject('CandidatesRepository')
    private candidatesRepository: ICandidateRepository,
  ) {}

  public async execute(id: number): Promise<void> {
    await this.candidatesRepository.delete(id);
  }
}

export default DeleteCandidateService;
