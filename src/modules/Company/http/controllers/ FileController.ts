import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CompanyAvatarService from '@modules/Company/services/CompanyAvatarService';

export default class FileController {
  public async create(request: Request, response: Response): Promise<Response> {
    const companyAvatar = await container.resolve(CompanyAvatarService);
    const company = await companyAvatar.execute({
      email: request.params.email,
      avatarFilename: request.file.filename,
    });

    return response.json(company);
  }
}
