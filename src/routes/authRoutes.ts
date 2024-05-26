import { Router } from 'express';

import controllerWrapper from '../utils/controllerWrapper';
import * as authController from '../controllers/authController';
import validate from '../middlewares/jsonValidator';
import { getLoginOptions } from '../schemas/authSchemas';

const authRoute: Router = Router();

authRoute.post('/login', validate(getLoginOptions), controllerWrapper(authController.getLoginOptions));

export default authRoute;