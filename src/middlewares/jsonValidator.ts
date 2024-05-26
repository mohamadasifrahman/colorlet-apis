import { Request, Response, NextFunction } from "express";
import Ajv from "ajv";
import addFormats from "ajv-formats"
import { HTTPError, INVALID_REQUEST } from '../httpError';


const ajv = new Ajv();
addFormats(ajv)
const validate = (schema: object) => {
    const validateFn = ajv.compile(schema);

    return (req: Request, res: Response, next: NextFunction) => {
        const isValid = validateFn(req.body);

        if (!isValid) {
            throw new HTTPError(INVALID_REQUEST.statusCode, INVALID_REQUEST.errorCode, 'unexpected data found in the request', validateFn.errors);
        }

        next();
    };
}

export default validate;