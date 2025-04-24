import { CreateShortUrlDto } from './dto/create-short-url.dto';
import { ShortUrl } from './entities/short-url.entity';
import { Repository } from 'typeorm';
export declare class ShortUrlService {
    private readonly shorturlRepository;
    constructor(shorturlRepository: Repository<ShortUrl>);
    getShortUrlByShortCode(shortCode: string): Promise<ShortUrl | null>;
    createShortUrl(createShortUrlDto: CreateShortUrlDto): Promise<ShortUrl>;
    getRedirectUrl(shortCode: string): Promise<string>;
}
