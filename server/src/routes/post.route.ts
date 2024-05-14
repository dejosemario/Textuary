import {Router} from 'express';
import * as postController from '../controllers/generate.controller.ts';
import wrapper from '../utils/wrapper.ts';

const postRoute = Router();

// postRoute.post('/', wrapper(postController.translateText));
postRoute.get('/generateImage', wrapper(postController.generateImage));


export default postRoute;