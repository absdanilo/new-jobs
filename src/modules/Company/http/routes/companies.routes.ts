import { Router } from 'express';
import multer from 'multer';
import uploadConfig from '@config/upload';
import CompaniesController from '../controllers/CompaniesController';
import FileController from '../controllers/ FileController';

const companiesRouter = Router();
const upload = multer(uploadConfig);
const companiesController = new CompaniesController();
const fileController = new FileController();

companiesRouter.post('/', upload.single('avatar'), companiesController.create);
companiesRouter.patch(
  '/avatar/:email',
  upload.single('avatar'),
  fileController.create,
);

export default companiesRouter;
