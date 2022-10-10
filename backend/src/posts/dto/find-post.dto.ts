import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class FindPostDto {
  @IsOptional()
  @IsString()
//  @IsNotEmpty()
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
  @IsNotEmpty()
  category?: string;

  @IsOptional()
  @IsString()
 // @IsNotEmpty()
  categoryExact?: string;
}
