import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  UploadedFile,
  UseInterceptors,
  BadRequestException,
  Query,
  CacheInterceptor,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { JwtAuthGuard } from 'src/auth/guard';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { v4 as uuid } from 'uuid';
import { GetUser } from 'src/auth/decorator';
import { User } from '@prisma/client';
import { FindPostDto } from './dto/find-post.dto';
import { join } from 'path';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(
    FileInterceptor('image', {
      storage: diskStorage({
        destination: join(__dirname, '..', '..', 'public', 'uploads'),
        filename: (req, file, cb) => {
          if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
            return cb(
              new BadRequestException('Only image files are allowed!'),
              '',
            );
          }

          const fileExtName = file.originalname.split('.')[1];
          const newFileName = `${uuid()}.${fileExtName}`;
          cb(null, newFileName);
        },
      }),
    }),
  )
  create(
    @GetUser() user: User,
    @Body() createPostDto: CreatePostDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    if (!file) {
      throw new BadRequestException('Image is required');
    }
    return this.postsService.create(user, createPostDto, file);
  }

  @Get()
  @UseInterceptors(CacheInterceptor)
  findAll(@Query() findPostDto: FindPostDto) {
    console.log('hello world');
    return this.postsService.findAll(findPostDto);
  }

  @Get(':id')
  @UseInterceptors(CacheInterceptor)
  findOne(@Param('id') id: string) {
    return this.postsService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(
    FileInterceptor('image', {
      storage: diskStorage({
        destination: join(__dirname, '..', '..', 'public', 'uploads'),
        filename: (req, file, cb) => {
          if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
            return cb(
              new BadRequestException('Only image files are allowed!'),
              '',
            );
          }

          const fileExtName = file.originalname.split('.')[1];
          const newFileName = `${uuid()}.${fileExtName}`;
          cb(null, newFileName);
        },
      }),
    }),
  )
  update(
    @Param('id') id: string,
    @Body() updatePostDto: UpdatePostDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    return this.postsService.update(+id, updatePostDto, file);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  remove(@Param('id') id: string) {
    return this.postsService.remove(+id);
  }
}
