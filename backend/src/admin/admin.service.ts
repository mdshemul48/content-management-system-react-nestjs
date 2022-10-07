import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';

@Injectable()
export class AdminService {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}
  async resetCache() {
    await this.cacheManager.reset();
    return 'Cache reset successfully';
  }
}
