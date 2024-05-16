import { Router } from 'express';
import * as postController from '../controllers/generate.controller.ts';
import wrapper from '../utils/wrapper.ts';
import { isAuthenticated } from '../middlewares/auth.ts';

const generateImageRoute = Router();

generateImageRoute.post('/image/generate', isAuthenticated, wrapper(postController.generateImage));
// postRoute.post('/translate', wrapper(postController.translateText));

export default generateImageRoute;
