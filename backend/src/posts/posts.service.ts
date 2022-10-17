import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePostDto } from './dto/create-post.dto';
import { FindPostDto } from './dto/find-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { StorageService } from 'src/utils/storage/storage.service';
@Injectable()
export class PostsService {
  constructor(
    private prisma: PrismaService,
    private storageService: StorageService,
  ) {}

  async create(
    user: User,
    createPostDto: CreatePostDto,
    files: {
      image: Express.Multer.File[];
      cover?: Express.Multer.File[];
    },
  ) {
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
      categories: categoriesString,
    } = createPostDto;

    const imageFileName = await this.storageService.storeImageFile(
      files.image[0],
      1000,
    );

    const imageFileSm = await this.storageService.storeImageFileSm(
      files.image[0],
    );

    let coverFileName: string = null;

    if (files.cover) {
      coverFileName = await this.storageService.storeImageFile(files.cover[0]);
    }

    const postContent = JSON.parse(content);

    return await this.prisma.post.create({
      data: {
        title,
        type,
        image: imageFileName,
        imageSm: imageFileSm,
        cover: files.cover ? coverFileName : null,
        metaData,
        tags,
        content: postContent,
        name,
        quality,
        watchTime,
        year,
        categories: {
          connect: JSON.parse(categoriesString).map((category: string) => ({
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
            parentId: true,
            id: true,
            name: true,
            type: true,
          },
        },
      },
    });
  }

  async findAll(findPostDto: FindPostDto) {
    const { searchTerm, order, page, limit, category, categoryExact } =
      findPostDto;

    const skip = page ? (Number(page) - 1) * Number(limit || 10) : 0;
    const take = limit ? Number(limit) : 10;

    const orderBy = {
      createdAt: order,
    };

    const categoryExactFilter = categoryExact
      ? categoryExact.split(',').map((category: string) => ({
          categories: {
            some: {
              id: Number(category),
            },
          },
        }))
      : undefined;

    const categoryFilter = category
      ? category.split(',').map((category: string) => ({
          categories: {
            some: {
              id: Number(category),
            },
          },
        }))
      : undefined;

    const whereOr = [];

    if (searchTerm) {
      const search = [
        {
          title: {
            search: searchTerm.replace(/[^a-zA-Z ]/g, ' '),
          },
        },
        {
          metaData: {
            search: searchTerm.replace(/[^a-zA-Z ]/g, ' '),
          },
        },
        {
          tags: {
            search: searchTerm.replace(/[^a-zA-Z ]/g, ' '),
          },
        },
        {
          name: {
            search: searchTerm.replace(/[^a-zA-Z ]/g, ' '),
          },
        },
      ];

      whereOr.push(...search);
    }

    if (categoryFilter) {
      whereOr.push(...categoryFilter);
    }

    const where = {
      OR: whereOr.length > 0 ? whereOr : undefined,
      AND: categoryExactFilter,
    };

    const select = {
      id: true,
      title: true,
      type: true,
      image: true,
      imageSm: true,
      metaData: true,
      tags: true,
      name: true,
      quality: true,
      watchTime: true,
      year: true,
      createdAt: true,
      updatedAt: true,
      categories: {
        select: {
          parentId: true,
          id: true,
          name: true,
          type: true,
        },
      },
      createdBy: {
        select: {
          id: true,
          name: true,
        },
      },
    };

    const postCount = await this.prisma.post.count({
      where,
    });

    const paginationInfo = {
      total: postCount,
      active: page ? Number(page) : 1,
      limit: limit ? Number(limit) : 10,
      pages: Math.ceil(postCount / (limit ? Number(limit) : 10)),
    };

    const posts = await this.prisma.post.findMany({
      where,
      select,
      orderBy,
      skip,
      take,
    });

    return {
      posts,
      pagination: paginationInfo,
    };
  }

  findOne(id: number) {
    const post = this.prisma.post.findUnique({
      where: {
        id,
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
            parentId: true,
            id: true,
            name: true,
            type: true,
          },
        },
      },
    });

    return post;
  }

  async update(
    id: number,
    updatePostDto: UpdatePostDto,
    files: {
      image?: Express.Multer.File[];
      cover?: Express.Multer.File[];
    },
  ) {
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
      categories: categoriesString,
    } = updatePostDto;

    let image: string = null;
    let imageSm: string = null;
    let cover: string = null;

    if (files.image) {
      image = await this.storageService.storeImageFile(files.image[0], 1000);
      imageSm = await this.storageService.storeImageFileSm(files.image[0]);
    }

    if (files.cover) {
      cover = await this.storageService.storeImageFile(files.cover[0]);
    }

    const postContent = JSON.parse(content);

    const post = await this.prisma.post.findUnique({
      where: {
        id,
      },
    });

    // deleting old image
    if (image) {
      await this.storageService.deleteImageFile(post.image);
      await this.storageService.deleteImageFile(post.imageSm);
    }

    // deleting old cover
    if (cover) {
      await this.storageService.deleteImageFile(post.cover);
    }

    // disconnect all categories
    await this.prisma.post.update({
      where: {
        id,
      },
      data: {
        categories: {
          set: [],
        },
      },
    });

    return this.prisma.post.update({
      where: {
        id,
      },
      data: {
        title,
        type,
        metaData,
        tags,
        content: postContent,
        image: image ? image : undefined,
        imageSm: imageSm ? imageSm : undefined,
        cover: cover ? cover : undefined,
        name,
        quality,
        watchTime,
        year,
        categories: {
          connect: JSON.parse(categoriesString).map((category: string) => ({
            id: category,
          })),
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
            parentId: true,
            id: true,
            name: true,
            type: true,
          },
        },
      },
    });
  }

  async remove(id: number) {
    const post = await this.prisma.post.findUnique({
      where: {
        id,
      },
    });

    // deleting old image and cover
    await this.storageService.deleteImageFile(post.image);
    await this.storageService.deleteImageFile(post.imageSm);
    if (post.cover) {
      await this.storageService.deleteImageFile(post.cover);
    }

    await this.prisma.post.delete({
      where: {
        id,
      },
    });

    return 'Post deleted successfully';
  }
}
