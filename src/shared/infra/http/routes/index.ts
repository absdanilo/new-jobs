import { Router } from 'express';
import occupationsRouter from '@modules/Occupation/http/routes/occupations.routes';
import candidatesRouter from '@modules/Candidate/http/routes/candidates.routes';
import companiesRouter from '@modules/Company/http/routes/companies.routes';
import jobsRouter from '@modules/Company/http/routes/jobs.routes';

const routes = Router();

routes.use('/occupations', occupationsRouter);
routes.use('/candidates', candidatesRouter);
routes.use('/companies', companiesRouter);
routes.use('/jobs', jobsRouter);

export default routes;
