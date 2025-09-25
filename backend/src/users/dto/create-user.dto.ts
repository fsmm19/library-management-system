import {
  IsArray,
  IsEmail,
  IsOptional,
  IsString,
  IsStrongPassword,
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
  @IsStrongPassword()
  @Matches(/^\S+$/, {
    message: 'password cannot contain spaces',
  })
  readonly password: string;

  @IsString()
  @MinLength(1)
  @MaxLength(50)
  @Matches(/^[A-Za-zÀ-ÿ' -]+$/, {
    message:
      'firstName can only contain letters, one space, hyphens and apostrophes',
  })
  readonly firstName: string;

  @IsString()
  @MinLength(1)
  @MaxLength(50)
  @Matches(/^[A-Za-zÀ-ÿ' -]+$/, {
    message:
      'firstName can only contain letters, one space, hyphens and apostrophes',
  })
  readonly lastName: string;

  @IsString()
  @IsOptional()
  readonly middleName?: string;

  @IsArray()
  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => PhoneNumberDto)
  readonly phoneNumbers: PhoneNumberDto[];

  @IsArray()
  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => AddressDto)
  readonly addresses: AddressDto[];
}
