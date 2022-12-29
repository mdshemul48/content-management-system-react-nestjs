import { IsNotEmpty, IsString } from 'class-validator';

export class changeUrl {
  @IsNotEmpty()
  @IsString()
  fromUrl: string;

  @IsNotEmpty()
  @IsString()
  toUrl: string;
}
