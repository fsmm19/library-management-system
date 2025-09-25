import { IsNotEmpty, IsString } from 'class-validator';

export class SignInDto {
  @IsNotEmpty()
  @IsString()
  readonly identifier: string;

  @IsNotEmpty()
  @IsString()
  readonly password: string;
}
