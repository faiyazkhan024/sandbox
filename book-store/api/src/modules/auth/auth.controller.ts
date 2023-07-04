import {
  Controller,
  Post,
  Body,
  UsePipes,
  ValidationPipe,
  UseGuards,
  Req,
} from '@nestjs/common';

import { AuthService } from './auth.service';
import { SignupAuthDto } from './dto/signup-auth.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  @UsePipes(ValidationPipe)
  signup(@Body() signupDto: SignupAuthDto) {
    return this.authService.signup(signupDto);
  }

  @UseGuards(AuthGuard('local'))
  @Post('login')
  login(@Req() req) {
    return req.user;
  }
}
