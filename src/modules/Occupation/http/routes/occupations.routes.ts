import { Router } from 'express';
import OccupationsController from '../controllers/OccupationsController';

const occupationsRouter = Router();
const occupationsController = new OccupationsController();

occupationsRouter.post('/', occupationsController.create);
occupationsRouter.get('/all', occupationsController.findAll);

export default occupationsRouter;
