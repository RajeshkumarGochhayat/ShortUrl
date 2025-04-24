import {
  Controller,
  Get,
  Post,
  Body,
  Res,
  HttpStatus,
  Param,
} from '@nestjs/common';
import { ShortUrlService } from './short-url.service';
import { CreateShortUrlDto } from './dto/create-short-url.dto';
import { Response } from 'express';
import { ApiTags, ApiResponse } from '@nestjs/swagger';
import {
  ON_CREATE_BAD_RESPONSE,
  ON_INTERNAL_SERVER_ERROR_RESPONSE,
} from 'src/shared/utils/utility.const';

@ApiTags('short-url')
@ApiResponse(ON_INTERNAL_SERVER_ERROR_RESPONSE)
@ApiResponse(ON_CREATE_BAD_RESPONSE)
@Controller('short-url')
export class ShortUrlController {
  constructor(private readonly shortUrlService: ShortUrlService) {}

  @Post()
  async create(
    @Body() createShortUrlDto: CreateShortUrlDto,
    @Res() res: Response,
  ) {
    return res.status(HttpStatus.CREATED).json({
      statusCode: HttpStatus.CREATED,
      data: await this.shortUrlService.createShortUrl(createShortUrlDto),
      message: 'Short Url added Successfully',
    });
  }

  @Get(':shortCode')
  async redirect(@Param('shortCode') shortCode: string, @Res() res: Response) {
    const url = await this.shortUrlService.getRedirectUrl(shortCode);
    return res.redirect(302, url);
  }
}
