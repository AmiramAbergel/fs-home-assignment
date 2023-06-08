import { Router } from 'express';
import { imagesRouter } from './Images.routes.js';

const indexRoute = Router();
indexRoute.use(`/images`, imagesRouter);
export default indexRoute;
