import { Module } from '@nestjs/common';
import { HomePageController } from './home-page.controller';
import { HomePageService } from './home-page.service';

@Module({
  controllers: [HomePageController],
  providers: [HomePageService]
})
export class HomePageModule {}
