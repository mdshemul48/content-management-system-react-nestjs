import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';
import { changeUrl } from './dto/changeUrl.dto';

@Injectable()
export class AdminService {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}
  async resetCache() {
    await this.cacheManager.reset();
    return 'Cache reset successfully';
  }

  async changeUrl(changeUrlInfo: changeUrl) {
    return changeUrlInfo;
  }
}
