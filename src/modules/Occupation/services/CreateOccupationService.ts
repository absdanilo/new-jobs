import { inject, injectable } from 'tsyringe';
import IOccupationRepository from '../repositories/IOcuppationRepository';
import Occupation from '../infra/typeorm/entities/Occupation';
import AppError from '@shared/errors/AppError';

@injectable()
class CreateOccupationSerive {
  constructor(
    @inject('OccupationRepository')
    private occupationsRepository: IOccupationRepository
  ) {}

  public async execute(name: string): Promise<Occupation> {
    const checkOccupationExists = await this.occupationsRepository.findByName(name);

    if(checkOccupationExists) {
      throw new AppError('Occupation already exists');
    }
    const occupation = await this.occupationsRepository.create(name);

    return occupation;
  }
}

export default CreateOccupationSerive;
