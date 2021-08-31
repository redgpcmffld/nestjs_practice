import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthCredentialsDto } from './dto/create-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private authServie: AuthService) {}

  @Post('/signup')
  signUp(
    @Body(ValidationPipe) authCredentailsDto: AuthCredentialsDto,
  ): Promise<void> {
    return this.authServie.signUp(authCredentailsDto);
  }

  @Post('/signin')
  signIn(
    @Body(ValidationPipe) authCredentialsDto: AuthCredentialsDto,
  ): Promise<{accessToken: string}> {
    return this.authServie.signIn(authCredentialsDto);
  }
}
