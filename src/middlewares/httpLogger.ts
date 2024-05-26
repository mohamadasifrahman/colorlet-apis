import { Request, Response, NextFunction } from 'express';

import logger from '../logger';

const httpLogger = (req: Request, res: Response, next: NextFunction) => {

    const start = Date.now();

    res.on('finish', () => {
        const elapsed = Date.now() - start;
        logger.http(`${req.method} ${getCallerIP(req)} ${req.url} ${res.statusCode} ${elapsed}ms`);
    });

    next();
}

const getCallerIP = (req: any): string => {
    let ip = req.headers['x-forwarded-for'] ||
        req.connection.remoteAddress ||
        req.socket.remoteAddress ||
        req.connection.socket.remoteAddress;
    ip = ip.split(',')[0];
    ip = ip.split(':').slice(-1);
    return ip;
}

export default httpLogger;
