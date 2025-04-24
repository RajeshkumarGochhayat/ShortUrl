import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateShortUrlDto } from './dto/create-short-url.dto';
import { ShortUrl } from './entities/short-url.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ShortUrlService {
  constructor(
    @InjectRepository(ShortUrl)
    private readonly shorturlRepository: Repository<ShortUrl>,
  ) {}

  async getShortUrlByShortCode(shortCode: string) {
    return await this.shorturlRepository.findOne({
      where: { shortCode },
    });
  }

  async createShortUrl(
    createShortUrlDto: CreateShortUrlDto,
  ): Promise<ShortUrl> {
    const url = await this.getShortUrlByShortCode(createShortUrlDto.shortCode);
    if (url) {
      throw new BadRequestException('ShortCode is Already Present');
    }
    return await this.shorturlRepository.save(createShortUrlDto);
  }

  async getRedirectUrl(shortCode: string): Promise<string> {
    const url = await this.getShortUrlByShortCode(shortCode);
    if (!url) {
      throw new NotFoundException('ShortCode not found');
    }
    return url.redirectUrl;
  }
}
