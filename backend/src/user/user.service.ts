import { ForbiddenException, Injectable } from '@nestjs/common';
import { NotFoundException } from '@nestjs/common/exceptions';
import * as argon from 'argon2';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    const alreadyExistUser = await this.prisma.user.findUnique({
      where: {
        email: createUserDto.email,
      },
    });
    if (alreadyExistUser) {
      throw new ForbiddenException('User already exist with this email.');
    }
    const hash = await argon.hash(createUserDto.password);

    const createdUser = await this.prisma.user.create({
      data: {
        name: createUserDto.name,
        email: createUserDto.email,
        password: hash,
      },
    });

    delete createdUser.password;

    return createdUser;
  }

  async findAll() {
    const allUser = await this.prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        createdAt: true,
        updatedAt: true,
        _count: {
          select: {
            post: true,
            category: true,
          },
        },
      },
    });
    return allUser;
  }

  async findOne(id: number) {
    const user = await this.prisma.user.findUnique({ where: { id } });
    if (!user) {
      throw new NotFoundException("User doesn't exist");
    }
    delete user.password;
    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    if (updateUserDto.password) {
      updateUserDto.password = await argon.hash(updateUserDto.password);
    }
    const updatedUser = await this.prisma.user.update({
      where: { id },
      data: updateUserDto,
    });

    delete updatedUser.password;
    return updatedUser;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
