import { Prisma } from '@prisma/client';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreatePostDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  type: 'singleVideo' | 'multiVideo' | 'singleFile' | 'multiFile' | 'series';

  @IsOptional()
  metaData: string;

  @IsNotEmpty()
  @IsString()
  tags: string;

  @IsNotEmpty()
  @IsString()
  content: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsOptional()
  quality?: string;
  @IsOptional()
  watchTime?: string;
  @IsOptional()
  year: string;

  @IsNotEmpty()
  categories: string;

  @IsOptional()
  userId?: number;
}
