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
    const allThePosts = await this.prisma.post.findMany({
      select: {
        type: true,
        content: true,
      },
    });
    console.log(allThePosts);
    return changeUrlInfo;
  }
}
