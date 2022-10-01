import { Injectable } from '@nestjs/common';
import { UnauthorizedException } from '@nestjs/common/exceptions';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto } from './dto/auth.dto';

@Injectable()
export class AuthService {
  constructor(
    private jwt: JwtService,
    private prisma: PrismaService,
    private config: ConfigService,
  ) {}

  async login(dto: AuthDto) {
    const user = await this.prisma.user.findUnique({
      where: { email: dto.email },
    });

    if (!user) {
      throw new UnauthorizedException(
        'Wrong credentials invalid email or password.',
      );
    }

    delete user.password;
    const secret = this.config.get<string>('JWT_SECRET');
    const token = await this.jwt.signAsync(
      { sub: user.id, email: user.email },
      { secret },
    );

    return {
      access_token: token,
      user,
    };
  }
}
