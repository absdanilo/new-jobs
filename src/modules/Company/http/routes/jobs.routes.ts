import { Router } from 'express';
import JobsController from '../controllers/JobsController';

const jobsRouter = Router();
const jobsController = new JobsController();

jobsRouter.post('/', jobsController.create);
jobsRouter.get('/find/occupation/:id', jobsController.findByOccupation);
jobsRouter.get('/all', jobsController.findAllJobs);

export default jobsRouter;
