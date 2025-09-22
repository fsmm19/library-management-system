import {
  IsArray,
  IsEmail,
  IsEnum,
  IsOptional,
  IsString,
  Matches,
  MaxLength,
  MinLength,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { UserType } from 'src/generated/prisma/enums';
import { PhoneNumberDto } from './phone-number.dto';
import { AddressDto } from './address.dto';

export class CreateUserDto {
  @IsString()
  @MinLength(4)
  @MaxLength(30)
  @Matches(/^[a-zA-Z0-9._-]+$/, {
    message:
      'username can only contain letters, numbers, dots, hyphens and underscores',
  })
  @Matches(/^(?![._-]).*(?<![._-])$/, {
    message: 'username cannot start or end with a dot, hyphen or underscore',
  })
  @Matches(/^(?!.*[._-]{2})/, {
    message: 'username cannot contain consecutive special characters',
  })
  readonly username: string;

  @IsEmail()
  readonly email: string;

  @IsString()
  readonly passwordHash: string;

  @IsString()
  readonly firstName: string;

  @IsString()
  readonly lastName: string;

  @IsString()
  @IsOptional()
  readonly middleName?: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => PhoneNumberDto)
  readonly phoneNumbers: PhoneNumberDto[];

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => AddressDto)
  readonly addresses: AddressDto[];

  @IsEnum(UserType)
  readonly userType: UserType;
}
