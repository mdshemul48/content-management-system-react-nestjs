import { Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';
import { CategoriesService } from 'src/categories/categories.service';
import { PostsService } from 'src/posts/posts.service';

@Module({
  controllers: [AdminController],
  providers: [AdminService, CategoriesService, PostsService],
})
export class AdminModule {}
