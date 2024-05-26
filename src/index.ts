import dotenv from 'dotenv';
dotenv.config();

import { Server } from 'net';

import { createServer } from './server';
import appConfig from './configs/appConfig';
import logger from './logger';

const PORT = appConfig.port;

const startServer = (): Server => {
    const app = createServer();

    return app.listen(PORT, () => {
        logger.info(`App ${appConfig.name} is starting...`);
        logger.info(`App is listening on port ${PORT}`);
    });

}

startServer();