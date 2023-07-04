import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { AuthService } from './auth.service';
import { User } from './entities/user.entity';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    console.log('local strategy');
    super({
      usernameField: 'email',
    });
  }

  async validate(email: string, password: string): Promise<User> {
    return await this.authService.login({ email, password });
  }
}
