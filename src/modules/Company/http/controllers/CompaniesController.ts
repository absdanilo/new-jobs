import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateCompanyService from '@modules/Company/services/CreateCompanyService';

export default class CompaniesController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, email, site, cnpj } = request.body;
    const createCompany = await container.resolve(CreateCompanyService);

    const company = await createCompany.execute({
      name,
      email,
      cnpj,
      site,
    });

    return response.json(company);
  }
}
