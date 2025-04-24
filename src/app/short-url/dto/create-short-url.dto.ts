import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsUrl, MaxLength } from 'class-validator';
import { STATIC_MESSAGES } from 'src/shared/utils/utility.const';

export class CreateShortUrlDto {
  @ApiProperty({
    description: 'shortCode',
  })
  @IsString({
    message: STATIC_MESSAGES.STRING_TYPE('shortCode'),
  })
  @IsNotEmpty({
    message: STATIC_MESSAGES.REQUIRED('shortCode'),
  })
  shortCode: string;

  @ApiProperty({
    description: 'redirectUrl',
  })
  @IsString({
    message: STATIC_MESSAGES.STRING_TYPE('redirectUrl'),
  })
  @MaxLength(1000)
  @IsUrl()
  @IsNotEmpty({
    message: STATIC_MESSAGES.REQUIRED('redirectUrl'),
  })
  redirectUrl: string;
}
