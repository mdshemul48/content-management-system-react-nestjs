import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Injectable()
export class PostsService {
  constructor(private prisma: PrismaService) {}

  create(user: User, createPostDto: CreatePostDto, file: Express.Multer.File) {
    const {
      title,
      type,
      metaData,
      tags,
      content,
      name,
      quality,
      watchTime,
      year,
      categories,
    } = createPostDto;

    return this.prisma.post.create({
      data: {
        title,
        type,
        image: file.filename,
        metaData,
        tags,
        content,
        name,
        quality,
        watchTime,
        year,
        categories: {
          connect: JSON.parse(categories).map((category: number) => ({
            id: category,
          })),
        },
        createdBy: {
          connect: {
            id: user.id,
          },
        },
      },
      include: {
        createdBy: {
          select: {
            id: true,
            name: true,
          },
        },
        categories: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });
  }

  findAll() {
    return `This action returns all posts`;
  }

  findOne(id: number) {
    return `This action returns a #${id} post`;
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    return `This action updates a #${id} post`;
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  }
}
