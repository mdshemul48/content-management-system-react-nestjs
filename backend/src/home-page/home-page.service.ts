import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class HomePageService {
  constructor(private prisma: PrismaService, private config: ConfigService) {}

  async getHomePagePosts() {
    const homePageSelectedCategory = this.config
      .get<string>('HOMEPAGE_CATEGORY')
      .split(',')
      .map((categoryId) => +categoryId);

    const mostPopularCategory = +this.config.get('MOST_POPULAR_CATEGORY');

    const mostPopularPosts = await this.prisma.category
      .findUnique({
        where: { id: mostPopularCategory },
      })
      .posts({
        take: 10,
        select: {
          id: true,
          title: true,
          name: true,
          image: true,
          cover: true,
          imageSm: true,
          quality: true,
          watchTime: true,
          year: true,
          categories: {
            select: {
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
        },
        orderBy: {
          createdAt: 'desc',
        },
      });

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
        imageSm: true,
        quality: true,
        watchTime: true,
        type: true,
        year: true,
      },
    });

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
            imageSm: true,
            quality: true,
            watchTime: true,
            year: true,
            type: true,
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

    return { latestPost, categoryPosts: categories, mostPopularPosts };
  }
}
