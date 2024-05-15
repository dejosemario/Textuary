import  { Router } from 'express';
import * as authController from '../controllers/auth.controller.ts';
import  wrapper  from '../utils/wrapper.ts';

const authRoute = Router();

authRoute.post('/auth/signup', wrapper(authController.signUp));
authRoute.post('/auth/login', wrapper(authController.login));

export default authRoute; 