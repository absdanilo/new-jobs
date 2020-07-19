import { Router } from 'express';
import CandidatesController from '../controllers/CandidatesController';

const candidatesRouter = Router();
const candidatesController = new CandidatesController();

candidatesRouter.post('/', candidatesController.create);
candidatesRouter.get('/find/:email', candidatesController.findEmail);
candidatesRouter.delete('/delete/:id', candidatesController.delete);

export default candidatesRouter;
