import { IsArray, IsBoolean, IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @IsBoolean()
  public isProfessor: boolean;

  @IsEmail(undefined, {
    message: 'O formato do e-mail não está correto.',
  })
  public email: string;

  @IsString({
    message: 'O formato da senha não está correto.',
  })
  public password: string;
}

export class UpdateUserDtoClass {
  @IsString()
  public campus: string;

  @IsBoolean()
  public firstTime: boolean;

  @IsString()
  public institution: string;

  @IsString()
  public name: string;

  @IsArray()
  @IsString({ each: true })
  @IsNotEmpty()
  public interests: string[];
}
