import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from 'src/generated/prisma/client';

@Injectable()
export class UsersService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createUserDto: Prisma.UserCreateInput) {
    return this.prismaService.user.create({ data: createUserDto });
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
