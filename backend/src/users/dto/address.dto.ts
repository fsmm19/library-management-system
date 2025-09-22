import { IsBoolean, IsEnum, IsPostalCode, IsString } from 'class-validator';
import { AddressType } from 'src/generated/prisma/enums';

export class AddressDto {
  @IsEnum(AddressType)
  readonly type: AddressType = 'PRIMARY';

  @IsString()
  readonly streetLine1: string;

  @IsString()
  readonly streetLine2?: string;

  @IsString()
  readonly city: string;

  @IsString()
  readonly state?: string;

  @IsPostalCode()
  readonly postalCode?: string;

  @IsString()
  readonly country: string;

  @IsBoolean()
  readonly isPrimary: boolean = false;
}
