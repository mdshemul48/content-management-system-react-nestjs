import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';
import { changeUrl } from './dto/changeUrl.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AdminService {
  constructor(
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
    private prisma: PrismaService,
  ) {}
  async resetCache() {
    await this.cacheManager.reset();
    return 'Cache reset successfully';
  }

  async changeUrl(changeUrlInfo: changeUrl) {
    const { fromUrl, toUrl } = changeUrlInfo;
    await this.prisma
      .$executeRaw`UPDATE posts SET content = REPLACE(content, ${fromUrl},${toUrl})`;

    return 'Url changed successfully';
  }
}
