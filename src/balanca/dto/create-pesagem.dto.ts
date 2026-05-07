import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNumber, IsString } from 'class-validator';

export class CreatePesagemDto {

  @ApiProperty({
    example: 99.7,
  })
  @Type(() => Number)
  @IsNumber()
  peso: number;

  @ApiProperty({
    example: 'OK',
  })
  @IsString()
  status: string;

}
