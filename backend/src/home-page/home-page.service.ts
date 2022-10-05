import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class HomePageService {
  constructor(private prisma: PrismaService) {}

  async getHomePagePosts() {
    const latestPost = await this.prisma.post.findMany({
      take: 12,
      orderBy: {
        createdAt: 'desc',
      },
      select: {
        id: true,
        title: true,
        name: true,
        image: true,
        quality: true,
        watchTime: true,
        year: true,
      },
    });

    const categoryPosts = await this.prisma.category.findMany({
      where: {
        type: 'main',
      },
      include: {
        posts: {
          take: 6,
          orderBy: {
            createdAt: 'desc',
          },
          select: {
            id: true,
            name: true,
            image: true,
            quality: true,
            watchTime: true,
            year: true,
          },
        },
      },
    });

    return { latestPost, categoryPosts };
  }
}
