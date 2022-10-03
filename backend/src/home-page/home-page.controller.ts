import { Controller, Get } from '@nestjs/common';
import { HomePageService } from './home-page.service';
@Controller('home-page')
export class HomePageController {
  constructor(private homePage: HomePageService) {}

  @Get('getHomePagePosts')
  getHomePagePosts() {
    return this.homePage.getHomePagePosts();
  }
}
