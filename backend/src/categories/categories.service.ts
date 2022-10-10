import {
  Injectable,
  NotFoundException,
  ForbiddenException,
} from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Injectable()
export class CategoriesService {
  constructor(private prisma: PrismaService) {}

  async create(createCategoryDto: CreateCategoryDto, user: User) {
    createCategoryDto.parentId;
    if (createCategoryDto.parentId) {
      const parent = await this.prisma.category.findUnique({
        where: { id: createCategoryDto.parentId },
      });
      if (!parent) {
        throw new NotFoundException('Parent category Not Found.');
      }
    }

    const createdCategory = await this.prisma.category.create({
      data: {
        name: createCategoryDto.name,
        parentId: createCategoryDto.parentId,
        userId: user.id,
        type: createCategoryDto.parentId ? 'sub' : 'main',
      },
      include: {
        createdBy: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });

    return createdCategory;
  }

  async findAll() {
    const categories = this.prisma.category.findMany({
      where: { type: 'main' },
      include: {
        createdBy: {
          select: {
            name: true,
            id: true,
          },
        },
        subCategory: {
          select: {
            id: true,
            name: true,
            type: true,
            parentId: true,
            userId: true,
            createdAt: true,
            updatedAt: true,
            createdBy: {
              select: {
                name: true,
                id: true,
              },
            },
          },
        },
      },
    });

    return categories;
  }

  async findOne(id: number) {
    const post = await this.prisma.category.findFirst({
      where: { id: id },
      include: {
        createdBy: {
          select: {
            name: true,
            id: true,
          },
        },
        subCategory: {
          select: {
            id: true,
            name: true,
            type: true,
            parentId: true,
            userId: true,
            createdAt: true,
            updatedAt: true,
            createdBy: {
              select: {
                name: true,
                id: true,
              },
            },
          },
        },
      },
    });

    if (!post) {
      throw new NotFoundException('Category Not Found.');
    }

    return post;
  }

  async update(id: number, updateCategoryDto: UpdateCategoryDto) {
    const { name, parentId } = updateCategoryDto;
    return await this.prisma.category.update({
      where: {
        id,
      },
      data: {
        name,
        parentId: parentId || null,
        type: parentId ? 'sub' : 'main',
      },
    });
  }

  async remove(id: number) {
    const category = await this.prisma.category.findUnique({
      where: {
        id: id,
      },
      include: {
        subCategory: true,
        posts: true,
      },
    });

    if (category.subCategory.length > 0) {
      throw new ForbiddenException('Category Has sub category.');
    }

    if (category.posts.length > 0) {
      throw new ForbiddenException('Category Has posts.');
    }

    await this.prisma.category.delete({
      where: {
        id: id,
      },
    });

    return 'category deleted';
  }
}
