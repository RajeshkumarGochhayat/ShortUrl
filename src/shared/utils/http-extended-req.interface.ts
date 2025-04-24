import { Request } from 'express';

export interface ExtendedRequest extends Request {
    sub?: {
        userName: string,
        tokenId: string
    };
}