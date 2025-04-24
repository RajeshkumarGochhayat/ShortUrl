import { NestMiddleware } from '@nestjs/common';
import { ExtendedRequest } from '../utils/http-extended-req.interface';
export declare class AuthMiddleware implements NestMiddleware {
    use(req: ExtendedRequest, res: any, next: () => void): Promise<void>;
}
