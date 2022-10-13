import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  UseInterceptors,
  BadRequestException,
  Query,
  CacheInterceptor,
  UploadedFiles,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { JwtAuthGuard } from 'src/auth/guard';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
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
    FileFieldsInterceptor(
      [
        { name: 'image', maxCount: 1 },
        { name: 'cover', maxCount: 1 },
      ],
      {
        storage: diskStorage({
          destination: join(__dirname, '..', '..', 'public', 'uploads'),
          filename: (req, file, cb) => {
            if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
              return cb(
                new BadRequestException('Only image files are allowed!'),
                '',
              );
            }

            const fileExtName = file.originalname.split('.').pop();
            const newFileName = `${uuid()}.${fileExtName}`;
            cb(null, newFileName);
          },
        }),
      },
    ),
  )
  create(
    @GetUser() user: User,
    @Body() createPostDto: CreatePostDto,
    @UploadedFiles()
    files: {
      image: Express.Multer.File[];
      cover?: Express.Multer.File[];
    },
  ) {
    if (!files.image) {
      throw new BadRequestException('Image is required');
    } else {
      if (!files.image[0].originalname.match(/\.(jpg|jpeg|png)$/)) {
        throw new BadRequestException(
          'Only image files are allowed for poster!',
        );
      }
    }
    if (files.cover) {
      if (!files.cover[0].originalname.match(/\.(jpg|jpeg|png)$/)) {
        throw new BadRequestException(
          'Only image files are allowed for cover!',
        );
      }
    }
    return this.postsService.create(user, createPostDto, files);
  }

  @Get()
  @UseInterceptors(CacheInterceptor)
  findAll(@Query() findPostDto: FindPostDto) {
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
    FileFieldsInterceptor(
      [
        { name: 'image', maxCount: 1 },
        { name: 'cover', maxCount: 1 },
      ],
      {
        storage: diskStorage({
          destination: join(__dirname, '..', '..', 'public', 'uploads'),
          filename: (req, file, cb) => {
            if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
              return cb(
                new BadRequestException('Only image files are allowed!'),
                '',
              );
            }

            const fileExtName = file.originalname.split('.').pop();
            const newFileName = `${uuid()}.${fileExtName}`;
            cb(null, newFileName);
          },
        }),
      },
    ),
  )
  update(
    @Param('id') id: string,
    @Body() updatePostDto: UpdatePostDto,
    @UploadedFiles()
    files: {
      image?: Express.Multer.File[];
      cover?: Express.Multer.File[];
    },
  ) {
    return this.postsService.update(+id, updatePostDto, files);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  remove(@Param('id') id: string) {
    return this.postsService.remove(+id);
  }
}
