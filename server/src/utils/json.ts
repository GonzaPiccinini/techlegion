import { Response } from "express";

export const writeJson = (res: Response, statusCode: number, data: any): Response<any, Record<string, any>> => {
    return res.status(statusCode).json(data)
}