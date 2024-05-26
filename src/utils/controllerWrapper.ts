import { Request, Response, NextFunction } from 'express';

/**
 * Wraps a controller function with a try-catch block to handle any errors that may occur during its execution.
 * If an error occurs, it is passed to the `next` function.
 * @param controller - The controller function to wrap.
 * @returns A new function that can be used as a route handler in an Express.js application.
 */

const controllerWrapper = (controller: (req: Request, res: Response) => Promise<void>) =>
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            await controller(req, res);
        } catch (error) {
            next(error);
        }
    };

export default controllerWrapper;
