import {
  IsBoolean,
  IsEnum,
  IsOptional,
  IsPostalCode,
  IsString,
} from 'class-validator';
import { AddressType } from 'src/generated/prisma/enums';

export class AddressDto {
  @IsEnum(AddressType)
  readonly type: AddressType = 'PRIMARY';

  @IsString()
  readonly streetLine1: string;

  @IsString()
  @IsOptional()
  readonly streetLine2?: string;

  @IsString()
  readonly city: string;

  @IsString()
  @IsOptional()
  readonly state?: string;

  @IsPostalCode('any')
  @IsOptional()
  readonly postalCode?: string;

  @IsString()
  readonly country: string;

  @IsBoolean()
  readonly isPrimary: boolean = false;
}
