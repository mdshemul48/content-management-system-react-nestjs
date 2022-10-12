import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class HomePageService {
  constructor(private prisma: PrismaService, private config: ConfigService) {}

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

    const homePageSelectedCategory = this.config
      .get<string>('HOMEPAGE_CATEGORY')
      .split(',')
      .map((categoryId) => +categoryId);

    const categoriesWithPost = await this.prisma.category.findMany({
      where: {
        type: 'main',
        id: {
          in: homePageSelectedCategory,
        },
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

    const categories = [];
    for (const selectedCategory of homePageSelectedCategory) {
      const category = categoriesWithPost.find(
        (category) => category.id === selectedCategory,
      );
      categories.push(category);
    }

    return { latestPost, categoryPosts: categories };
  }
}
