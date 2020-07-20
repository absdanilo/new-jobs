import { injectable, inject } from 'tsyringe';
import AppError from '@shared/errors/AppError';
import ICompaniesRepository from '../repositories/ICompaniesRepository';
import Company from '../infra/typeorm/entities/Company';

interface IRequest {
  email: string;
  avatarFilename: string;
}

@injectable()
class CompanyAvatarService {
  constructor(
    @inject('CompaniesRepository')
    private companiesRepository: ICompaniesRepository,
  ) {}

  public async execute({ email, avatarFilename }: IRequest): Promise<Company> {
    const company = await this.companiesRepository.findByEmail(email);

    if (!company) {
      throw new AppError('Email not exists.');
    }

    if (company.avatar === null) {
      company.avatar = '';
    }

    company.avatar = avatarFilename;

    await this.companiesRepository.save(company);

    return company;
  }
}

export default CompanyAvatarService;
