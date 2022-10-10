import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class FindPostDto {
  @IsOptional()
  @IsString()
  searchTerm?: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  order?: 'asc' | 'desc';

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  page?: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  limit?: string;

  @IsOptional()
  @IsString()
  category?: string;

  @IsOptional()
  @IsString()
  categoryExact?: string;
}
