import {
  Injectable,
  NestMiddleware,
  UnauthorizedException,
} from '@nestjs/common';
import { ExtendedRequest } from '../utils/http-extended-req.interface';
import { STATIC_MESSAGES } from '../utils/utility.const';
import { config } from 'dotenv';
config({ path: '.env' });

@Injectable()
export class AuthMiddleware implements NestMiddleware {

  async use(req: ExtendedRequest, res: any, next: () => void) {
    const token: string =
      req.headers['authorization']?.split('Bearer ')?.[1] || '';

    if (!token) throw new UnauthorizedException(STATIC_MESSAGES.TOKEN_MISSING);
    if (token === process.env.ACCESS_KEY) {
      next();
    }else{
      throw new UnauthorizedException(STATIC_MESSAGES.UNAUTHORIZED);
    }
  }
}
