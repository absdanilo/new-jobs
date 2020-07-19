import { inject, injectable } from 'tsyringe';
import IOccupationRepository from '../repositories/IOcuppationRepository';
import Occupation from '../infra/typeorm/entities/Occupation';

@injectable()
class FindAllOccupationsSerivce {
  constructor(
    @inject('OccupationRepository')
    private occupationsRepository: IOccupationRepository
  ) {}

  public async execute(): Promise<Occupation[]> {
    return await this.occupationsRepository.findAll();
  }
}

export default FindAllOccupationsSerivce;
