import { IsEmail, IsString } from 'class-validator';
import { IsEqualsTo } from 'src/decorators/is-equals-to.decorator';

export class SignupAuthDto {
  @IsEmail()
  email: string;
  @IsString()
  password: string;
  @IsString()
  @IsEqualsTo('password')
  confirmPassword: string;
}
