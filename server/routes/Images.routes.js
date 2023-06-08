import { Router } from 'express';
import { getImages } from '../controllers/Images.controller.js';

export const imagesRouter = Router();

imagesRouter.route(`/`).get(getImages);
