import {
  CacheInterceptor,
  Controller,
  Get,
  UseInterceptors,
} from '@nestjs/common';
import { HomePageService } from './home-page.service';
@Controller('home-page')
@UseInterceptors(CacheInterceptor)
export class HomePageController {
  constructor(private homePage: HomePageService) {}

  @Get('getHomePagePosts')
  getHomePagePosts() {
    return this.homePage.getHomePagePosts();
  }
}
