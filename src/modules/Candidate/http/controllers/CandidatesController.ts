import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateCandidateService from '@modules/Candidate/services/CreateCandidateService';
import DeleteCandidateService from '@modules/Candidate/services/DeleteCandidateService';
import FindEmailCandidateService from '@modules/Candidate/services/FindEmailCandidateService';
import FindAllCandidateService from '@modules/Candidate/services/FindAllCandidateService';
import paginate from 'utils/paginate';
import FindByOccupationCandidateService from '@modules/Candidate/services/FindByOccupationCandidate';
import shuffle from 'utils/shuffle';

export default class CandidatesController {
  public async create(request: Request, response: Response): Promise<Response> {
    const {
      name,
      email,
      whatsapp,
      linkedin,
      lastJob,
      occupation_area,
    } = request.body;
    const createCandidate = container.resolve(CreateCandidateService);

    const candidate = await createCandidate.execute({
      name,
      email,
      whatsapp,
      linkedin,
      lastJob,
      occupation_area,
    });

    return response.json(candidate);
  }

  public async findEmail(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { email } = request.params;
    const findEmailCandidate = container.resolve(FindEmailCandidateService);

    const candidate = await findEmailCandidate.execute(email);

    return response.json(candidate);
  }

  public async findAllCandidates(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { page = 1 } = request.query;
    const pageSize = 20;

    const findAllCandidates = await container.resolve(FindAllCandidateService);

    const candidates = await findAllCandidates.execute();

    const candidatesPaginate = paginate(
      candidates as [],
      pageSize,
      Number(page),
    );

    return response.json({
      page: Number(page),
      pageSize,
      totalCount: candidatesPaginate.length,
      candidates: shuffle(candidatesPaginate as []),
    });
  }

  public async findByOccupationCandidates(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { page = 1 } = request.query;
    const { id } = request.params;
    const pageSize = 20;

    const findAllCandidates = await container.resolve(
      FindByOccupationCandidateService,
    );

    const candidates = await findAllCandidates.execute(Number(id));

    const candidatesPaginate = paginate(
      candidates as [],
      pageSize,
      Number(page),
    );

    return response.json({
      page: Number(page),
      pageSize,
      totalCount: candidatesPaginate.length,
      candidates: shuffle(candidatesPaginate as []),
    });
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const deleteCandidate = container.resolve(DeleteCandidateService);

    await deleteCandidate.execute(Number(id));

    return response.json({ success: true });
  }
}
