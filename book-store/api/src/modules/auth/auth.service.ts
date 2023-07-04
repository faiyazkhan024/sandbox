import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityNotFoundError, Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

import { User } from './entities/user.entity';
import { SignupAuthDto } from './dto/signup-auth.dto';
import { LoginAuthDto } from './dto/login-auth.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async signup(signupDto: SignupAuthDto) {
    try {
      await this.userRepository.findOneByOrFail({ email: signupDto.email });
      throw new BadRequestException('User already exist');
    } catch (error) {
      if (error instanceof EntityNotFoundError) {
        const user = this.userRepository.create(signupDto);
        return await this.userRepository.save(user);
      }
      throw error;
    }
  }

  async login(loginDto: LoginAuthDto) {
    try {
      const user = await this.userRepository.findOneOrFail({
        where: { email: loginDto.email },
      });
      return await new Promise<User>((resolve, reject) => {
        bcrypt.compare(loginDto.password, user.password, (err, result) => {
          if (err) reject(err);
          if (result) resolve(user);
          reject(new UnauthorizedException());
        });
      });
    } catch (error) {
      if (error instanceof EntityNotFoundError) {
        throw new UnauthorizedException();
      }
      throw error;
    }
  }
}
