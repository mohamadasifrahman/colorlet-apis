import { Router } from 'express';

import controllerWrapper from '../utils/controllerWrapper';
import * as authController from '../controllers/authController'

const authRoute: Router = Router();

authRoute.post('/login', controllerWrapper(authController.getLoginOptions));

export default authRoute;