import { IsEmail, IsString } from 'class-validator';

export class LoginUserDto {
  @IsEmail(undefined, {
    message: 'O formato do e-mail não está correto.',
  })
  public email: string;

  @IsString({
    message: 'O formato da senha não está correto.',
  })
  public password: string;
}
