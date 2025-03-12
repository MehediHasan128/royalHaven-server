/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from "express";
import { ZodError } from "zod";
import { TErrorSource } from "../interface/error";
import { handelZodValidationError } from "../error/handelZodValidationError";

export const globalErrorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
    let statusCode = 500;
    let message = 'Something Went wrong';
    let errorSource: TErrorSource = [
        {
            path: '',
            message: 'Something went wrong'
        }
    ]


    if(err instanceof ZodError) {
        const simplifiedError = handelZodValidationError(err);
        statusCode = simplifiedError?.statusCode;
        message = simplifiedError?.message;
        errorSource = simplifiedError?.errorSource;
    }

    return res.status(statusCode).json({
        success: false,
        message,
        errorSource,
        err: err
    })
}