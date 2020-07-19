import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateOccupationSerive from '@modules/Occupation/services/CreateOccupationService';
import FindAllOccupationsSerivce from '@modules/Occupation/services/FindAllOccupationsSerivce';

export default class OccupationsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name } = request.body;
    const createOccupation = container.resolve(CreateOccupationSerive);
    const occupation = await createOccupation.execute(name);
    return response.json(occupation);
  }

  public async findAll(_: Request, response: Response): Promise<Response> {
    const findOccupations = container.resolve(FindAllOccupationsSerivce);
    const occupations = await findOccupations.execute();

    return response.json(occupations);
  }
}
