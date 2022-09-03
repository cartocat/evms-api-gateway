import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
/**
 * Data Transfer, validation and API Defination Class
 */
export class UserDTO {
  @ApiProperty()
  @IsNotEmpty()
  userName: string;

  @ApiProperty()
  @IsNotEmpty()
  phoneNumber: string;

  @ApiProperty()
  @IsNotEmpty()
  password: string;
}
