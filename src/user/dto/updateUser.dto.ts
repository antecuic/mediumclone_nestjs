import { IsEmail } from 'class-validator';

export class UpdateUserDto {
  @IsEmail()
  email: string;

  username: string;

  password: string;

  image: string;

  bio: string;
}
