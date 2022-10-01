export class CreatePostDto {
  title: string;
  type: 'singleVideo' | 'multiVideo' | 'singleFile' | 'multiFile' | 'series';
  image: string;
  metaData: string;
  tags: string;
  content: JSON;

  name?: string;
  quality?: string;
  watchTime?: string;

  categories: number[];
  userId: number;
}
