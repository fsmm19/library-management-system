import { IsBoolean, IsEnum, IsPhoneNumber } from 'class-validator';
import { PhoneType } from 'src/generated/prisma/enums';

export class PhoneNumberDto {
  @IsEnum(PhoneType)
  readonly type: PhoneType;

  @IsPhoneNumber()
  readonly number: string;

  @IsBoolean()
  readonly isVerified?: boolean = false;

  @IsBoolean()
  readonly isPrimary?: boolean = false;
}
