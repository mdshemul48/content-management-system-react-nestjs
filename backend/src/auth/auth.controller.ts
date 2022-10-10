import { Body, Controller, Post, HttpCode } from '@nestjs/common';
import { HttpStatus } from '@nestjs/common/enums';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  @HttpCode(HttpStatus.ACCEPTED)
  login(@Body() dto: AuthDto) {
    return this.authService.login(dto);
  }
}
