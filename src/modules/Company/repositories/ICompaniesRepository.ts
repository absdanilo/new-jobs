import Company from '../infra/typeorm/entities/Company';
import ICreateCompanyDTO from '../dtos/ICreateCompanyDTO';

export default interface ICompaniesRepository {
  findById(id: number): Promise<Company | undefined>;
  findByEmail(email: string): Promise<Company | undefined>;
  create(data: ICreateCompanyDTO): Promise<Company>;
  save(company: Company): Promise<Company>;
}
