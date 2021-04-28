import { Response } from 'express';

export enum response_status_codes {
    success = 200,
    bad_request = 400,
    internal_server_error = 500
}

export function successResponse(message: string, data: any, response: Response) {
    return response.status(response_status_codes.success).json({
        status: 'SUCCESS',
        message,
        data
    });
}

export function mongoError(error: any, response: Response) {
    return response.status(response_status_codes.internal_server_error).json({
        status: 'FAILURE',
        message: 'MongoDB error',
        data: error
    });
}