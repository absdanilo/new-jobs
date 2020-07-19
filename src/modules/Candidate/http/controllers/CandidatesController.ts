import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateCandidateService from '@modules/Candidate/services/CreateCandidateService';
import DeleteCandidateService from '@modules/Candidate/services/DeleteCandidateService';
import FindEmailCandidateService from '@modules/Candidate/services/FindEmailCandidateService';


export default class CandidatesController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, email, whatsapp, linkedin, lastJob, occupation_area } = request.body;
    const createCandidate = container.resolve(CreateCandidateService);

    const candidate = await createCandidate.execute({
      name,
      email,
      whatsapp,
      linkedin,
      lastJob,
      occupation_area
    });

    return response.json(candidate);
  }

  public async findEmail(request: Request, response: Response): Promise<Response> {
    const { email } = request.params;
    const findEmailCandidate = container.resolve(FindEmailCandidateService);

    const candidate = await findEmailCandidate.execute(email);

    return response.json(candidate);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const deleteCandidate = container.resolve(DeleteCandidateService);

    await deleteCandidate.execute(Number(id));

    return response.json({ success: true });
  }
}
