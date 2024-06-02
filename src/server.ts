import express, { Application, Request, Response, NextFunction } from 'express';
import helmet from 'helmet';
import cors from 'cors';

import appConfig from './configs/appConfig';
import httpLogger from './middlewares/httpLogger';
import errorHandler from './middlewares/errorHandler';
import v1Router from './routes/v1Router';
import { HTTPError, RESOURCE_NOT_FOUND } from './httpError';


export function createServer(): Application {
    const app = express();

    app.disable('x-powered-by')

    const corsOptions = appConfig.environment === 'production' ? { origin: 'https://colorlet.com' } : { origin: '*' };

    app.use(express.json({ limit: '40mb' }));
    app.use(express.urlencoded({ extended: true, limit: '40mb' }));
    app.use(cors(corsOptions));

    app.use(helmet());

    app.use(httpLogger);

    app.get('/ping', (req: Request, res: Response) => {
        res.send('pong');
    })

    app.use('/v1', v1Router);

    app.use((req: Request, res: Response) => {
        throw new HTTPError(RESOURCE_NOT_FOUND.statusCode, RESOURCE_NOT_FOUND.errorCode, 'URL not found', '');
    })

    app.use(errorHandler);

    return app;
}