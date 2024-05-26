import { Router } from 'express';

import controllerWrapper from '../utils/controllerWrapper';
import * as paletteController from '../controllers/paletteController'

const paletteRoute: Router = Router();

paletteRoute.post('/create', controllerWrapper(paletteController.createPalettes));

export default paletteRoute;