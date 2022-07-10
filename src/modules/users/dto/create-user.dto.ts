import { IsNotEmpty, IsString, IsOptional } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  public login: string;

  @IsString()
  @IsNotEmpty()
  public password: string;

  @IsString()
  @IsNotEmpty()
  public name: string;

  @IsString()
  @IsOptional()
  public country: string;
}
