import { ShortUrlService } from './short-url.service';
import { CreateShortUrlDto } from './dto/create-short-url.dto';
import { Response } from 'express';
export declare class ShortUrlController {
    private readonly shortUrlService;
    constructor(shortUrlService: ShortUrlService);
    create(createShortUrlDto: CreateShortUrlDto, res: Response): Promise<Response<any, Record<string, any>>>;
    redirect(shortCode: string, res: Response): Promise<void>;
}
