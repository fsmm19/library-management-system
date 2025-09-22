import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from 'src/generated/prisma/client';
import { CreateUserDto } from './dto/create-user.dto';
import * as argon2 from 'argon2';

@Injectable()
export class UsersService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    const { passwordHash, addresses, phoneNumbers, ...userData } =
      createUserDto;

    try {
      const hash = await argon2.hash(passwordHash, {
        type: argon2.argon2id,
        memoryCost: 2 ** 16,
        timeCost: 3,
        parallelism: 1,
      });

      return this.prismaService.user.create({
        data: {
          ...userData,
          passwordHash: hash,
          addresses: {
            create: addresses,
          },
          phoneNumbers: {
            create: phoneNumbers,
          },
        },
      });
    } catch (error) {
      throw new InternalServerErrorException('Error creating user');
    }
  }

  async findAll() {
    return this.prismaService.user.findMany({
      include: {
        phoneNumbers: true,
        addresses: true,
      },
    });
  }

  async findOne(id: string) {
    return this.prismaService.user.findUnique({
      where: { id },
      include: {
        phoneNumbers: true,
        addresses: true,
      },
    });
  }

  async findOneByEmail(email: string) {
    return this.prismaService.user.findUnique({
      where: { email },
      include: {
        phoneNumbers: true,
        addresses: true,
      },
    });
  }

  async findOneByUsername(username: string) {
    return this.prismaService.user.findUnique({
      where: { username },
      include: {
        phoneNumbers: true,
        addresses: true,
      },
    });
  }

  async update(id: string, updateUserDto: Prisma.UserUpdateInput) {
    return this.prismaService.user.update({
      where: {
        id,
      },
      data: updateUserDto,
    });
  }

  remove(id: string) {
    return this.prismaService.user.delete({
      where: { id },
    });
  }
}
