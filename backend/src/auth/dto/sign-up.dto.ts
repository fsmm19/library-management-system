import {
  IsEmail,
  IsOptional,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

export class SignUpDto {
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
  readonly password: string;

  @IsString()
  readonly firstName: string;

  @IsString()
  readonly lastName: string;

  @IsString()
  @IsOptional()
  readonly middleName?: string;
}
