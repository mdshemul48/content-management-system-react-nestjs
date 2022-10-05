import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class SearchRecommendationService {
  constructor(private httpService: HttpService) {}
  async getSearchRecommendation(search: string) {
    const url = `http://suggestqueries.google.com/complete/search?client=firefox&q=${search}`;
    const response = await this.httpService.axiosRef.get(url);
    return response.data;
  }
}
