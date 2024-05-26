type HTTPStatusCode = 200 | 400 | 401 | 403 | 404 | 500;

export const OK: { statusCode: HTTPStatusCode } = {
    statusCode: 200
}

export const INVALID_REQUEST: { errorCode: string, statusCode: HTTPStatusCode } = {
    errorCode: 'invalid_request',
    statusCode: 400
}

export const UNAUTHORIZED: { errorCode: string, statusCode: HTTPStatusCode } = {
    errorCode: 'unauthorized',
    statusCode: 401
}

export const FORBIDDEN: { errorCode: string, statusCode: HTTPStatusCode } = {
    errorCode: 'forbidden',
    statusCode: 403
}

export const RESOURCE_NOT_FOUND: { errorCode: string, statusCode: HTTPStatusCode } = {
    errorCode: 'resource_not_found',
    statusCode: 404
}

export const INTERNAL_SERVER_ERROR: { errorCode: string, statusCode: HTTPStatusCode } = {
    errorCode: 'internal_server_error',
    statusCode: 500
}


export class HTTPError extends Error {

    errorCode: string;
    statusCode: number;
    details: any;

    constructor(statusCode: number, errorCode: string, message: string, details: any) {
        super(message);
        this.statusCode = statusCode;
        this.errorCode = errorCode;
        this.details = details;
    }
}