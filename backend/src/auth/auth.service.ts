import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { UsersService } from 'src/users/users.service';

import * as argon2 from 'argon2';
import { CreateUserDto } from 'src/users/dto/create-user.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async signUp(createUserDto: CreateUserDto) {
    try {
      this.userService.create(createUserDto);
    } catch (error) {
      console.log(error);
    }
  }

  async signIn(
    identifier: string,
    password: string,
  ): Promise<{ access_token: string }> {
    const user = await this.userService.findOneByIdentifier(identifier);
    if (!user) throw new UnauthorizedException('Invalid credentials');

    const isPasswordValid = await argon2.verify(user.passwordHash, password);
    if (!isPasswordValid)
      throw new UnauthorizedException('Invalid credentials');

    const payload = {
      sub: user.id,
      username: user.username,
      email: user.email,
    };

    return { access_token: await this.jwtService.signAsync(payload) };
  }
}
