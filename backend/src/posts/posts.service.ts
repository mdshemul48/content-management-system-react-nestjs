import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Injectable()
export class PostsService {
  constructor(private prisma: PrismaService) {}

  create(createPostDto: CreatePostDto) {
    // return this.prisma.post.create({
    //   data: {
    //     title,
    //     type,
    //     image,
    //     metaData,
    //     tags,
    //     content,
    //     name,
    //     quality,
    //     watchTime,
    //     categories: {
    //       connect: categories.map((id) => ({ id })),
    //     },
    //     user: {
    //       connect: { id: userId },
    //     },
    //   },
    // });

    return 'This action adds a new post';
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
