import { getRepository, Repository } from 'typeorm';
import ICompaniesRepository from '@modules/Company/repositories/ICompaniesRepository';
import Company from '../entities/Company';
import ICreateCompanyDTO from '@modules/Company/dtos/ICreateCompanyDTO';

class CompaniesRepository implements ICompaniesRepository {
  private ormRepository: Repository<Company>;

  constructor() {
    this.ormRepository = getRepository(Company);
  }
  public async findByEmail(email: string): Promise<Company | undefined> {
    const company = await this.ormRepository.findOne({ where: { email } });

    return company;
  }
  public async create({ name, email, site, cnpj }: ICreateCompanyDTO): Promise<Company> {
    const company = await this.ormRepository.create({
      name,
      email,
      site,
      cnpj
    });

    await this.ormRepository.save(company);
    return company;
  }
  public async save(company: Company): Promise<Company> {
    return this.ormRepository.save(company);
  }
}

export default CompaniesRepository;
