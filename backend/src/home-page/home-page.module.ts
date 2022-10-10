import { Module } from '@nestjs/common';
import { HomePageController } from './home-page.controller';
import { HomePageService } from './home-page.service';

@Module({
  imports: [],
  controllers: [HomePageController],
  providers: [HomePageService],
})
export class HomePageModule {}
