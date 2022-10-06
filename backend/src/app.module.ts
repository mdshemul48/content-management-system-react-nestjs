import { CacheModule, Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { CategoriesModule } from './categories/categories.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { PostsModule } from './posts/posts.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { HomePageModule } from './home-page/home-page.module';
import { SearchRecommendationModule } from './search-recommendation/search-recommendation.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
      exclude: ['/api*'],
    }),
    CacheModule.register({
      ttl: 300,
      max: 500,
      isGlobal: true,
    }),

    AuthModule,
    UserModule,
    CategoriesModule,
    PrismaModule,
    PostsModule,
    HomePageModule,
    SearchRecommendationModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
