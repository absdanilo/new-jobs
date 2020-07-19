import { injectable, inject } from "tsyringe";
import ICompaniesRepository from "../repositories/ICompaniesRepository";
import Company from "../infra/typeorm/entities/Company";
import AppError from "@shared/errors/AppError";

interface IRequest {
  name: string;
  cnpj: string;
  site: string;
  email: string;
  avatar: string;
}

@injectable()
class CreateCompanyService {
  constructor(
    @inject('CompaniesRepository')
    private companiesRepository: ICompaniesRepository
  ) {}

  public async execute({ name, cnpj, site, email,avatar }: IRequest): Promise<Company> {
    const checkCompanyExists = await this.companiesRepository.findByEmail(email);

    if(checkCompanyExists) {
      throw new AppError('Email addres already used.');
    }

    const company = await this.companiesRepository.create({
      name,
      cnpj,
      site,
      email,
      avatar
    });

    return company;
  }
}

export default CreateCompanyService;
