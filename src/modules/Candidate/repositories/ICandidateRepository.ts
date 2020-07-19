import Candidate from "../infra/typeorm/entities/Candidate";
import ICreateCandidateDTO from "../dtos/ICreateCandidateDTO";

export default interface ICandidatesService {
  findByEmail(email: string): Promise<Candidate | undefined>;
  create(data: ICreateCandidateDTO): Promise<Candidate>;
  save(candidate: Candidate): Promise<Candidate>;
  delete(id: number):Promise<void>;
}
