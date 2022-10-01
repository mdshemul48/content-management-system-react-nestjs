import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
export class CreateCategoryDto {
  @IsNumber()
  @IsOptional()
  parentId: number;
  @IsNotEmpty()
  @IsString()
  name: string;

  createdAt?: Date;
  updatedAt?: Date;
  userId?: number;
}
