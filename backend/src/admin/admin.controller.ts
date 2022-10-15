import {
  Controller,
  Get,
  HttpCode,
  Param,
  Query,
  UseGuards,
  HttpStatus,
  Delete,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guard';
import { CategoriesService } from 'src/categories/categories.service';
import { FindPostDto } from 'src/posts/dto/find-post.dto';
import { PostsService } from 'src/posts/posts.service';
import { AdminService } from './admin.service';

@Controller('admin')
@UseGuards(JwtAuthGuard)
export class AdminController {
  constructor(
    private readonly adminService: AdminService,
    private readonly postsService: PostsService,
    private readonly categoriesService: CategoriesService,
  ) {}

  @Get('/categories')
  getCategories() {
    return this.categoriesService.findAll();
  }
  @Get('/categories/:id')
  getSingleCategory(@Param('id') id: string) {
    return this.categoriesService.findOne(+id);
  }

  @Get('/posts')
  getPosts(@Query() findPostDto: FindPostDto) {
    return this.postsService.findAll(findPostDto);
  }

  @Get('/posts/:id')
  getSinglePost(@Param('id') id: string) {
    return this.postsService.findOne(+id);
  }

  @Delete('/resetCache')
  @HttpCode(HttpStatus.ACCEPTED)
  resetCache() {
    return this.adminService.resetCache();
  }
}
