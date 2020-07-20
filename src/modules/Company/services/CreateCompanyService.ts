import { injectable, inject } from 'tsyringe';
import AppError from '@shared/errors/AppError';
import ICompaniesRepository from '../repositories/ICompaniesRepository';
import Company from '../infra/typeorm/entities/Company';

interface IRequest {
  name: string;
  cnpj: string;
  site: string;
  email: string;
}

@injectable()
class CreateCompanyService {
  constructor(
    @inject('CompaniesRepository')
    private companiesRepository: ICompaniesRepository,
  ) {}

  public async execute({
    name,
    cnpj,
    site,
    email,
  }: IRequest): Promise<Company> {
    const checkCompanyExists = await this.companiesRepository.findByEmail(
      email,
    );

    if (checkCompanyExists) {
      throw new AppError('Email addres already used.');
    }

    const company = await this.companiesRepository.create({
      name,
      cnpj,
      site,
      email,
    });

    return company;
  }
}

export default CreateCompanyService;
