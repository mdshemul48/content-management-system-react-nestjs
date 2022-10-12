import {
  CacheInterceptor,
  Controller,
  Get,
  UseInterceptors,
} from '@nestjs/common';
import { HomePageService } from './home-page.service';
@Controller('home-page')
export class HomePageController {
  constructor(private homePage: HomePageService) {}

  @Get('getHomePagePosts')
  // @UseInterceptors(CacheInterceptor)
  getHomePagePosts() {
    console.log('getHomePagePosts');
    return this.homePage.getHomePagePosts();
  }
}
