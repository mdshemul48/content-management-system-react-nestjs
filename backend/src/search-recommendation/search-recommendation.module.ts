import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { SearchRecommendationController } from './search-recommendation.controller';
import { SearchRecommendationService } from './search-recommendation.service';

@Module({
  imports: [HttpModule],
  controllers: [SearchRecommendationController],
  providers: [SearchRecommendationService],
})
export class SearchRecommendationModule {}
