import { IsString, Matches, MaxLength, MinLength } from 'class-validator';

export class AuthCredentialsDto {
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  username: string;

  @IsString()
  @MinLength(8)
  @MaxLength(20)
  @Matches(/^(?=.*\w)(?=.*[!@#$%&*])(\S){8,}$/, {
    message: 'Password must be including English, numbers and special characters.',
  })
  password: string;
}
