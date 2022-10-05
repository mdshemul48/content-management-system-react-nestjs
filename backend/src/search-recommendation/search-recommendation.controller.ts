import { Controller, Get, Query } from '@nestjs/common';
import { SearchRecommendationService } from './search-recommendation.service';

@Controller('search-recommendation')
export class SearchRecommendationController {
  constructor(
    private searchRecommendationService: SearchRecommendationService,
  ) {}
  @Get()
  getSearchRecommendation(@Query('search') search: string) {
    return this.searchRecommendationService.getSearchRecommendation(search);
  }
}
