import { NextFunction, Request, Response } from 'express';

import appConfig from '../configs/appConfig';
import logger from '../logger';
import { HTTPError, INTERNAL_SERVER_ERROR } from '../httpError';

const errorHandler = (error: Error, req: Request, res: Response, next: NextFunction) => {

    if (error instanceof HTTPError) {
        res.status(error.statusCode).send({
            code: error.errorCode,
            message: error.message
        })

    } else {
        res.status(INTERNAL_SERVER_ERROR.statusCode).send({
            code: INTERNAL_SERVER_ERROR.errorCode,
            message: error.message
        })
    }

    if (appConfig.environment !== 'production') {
        logger.error({
            message: error.message,
            stackTrace: error.stack
        })
    } else {
        logger.error({
            message: error.message
        })
    }
}

export default errorHandler;
