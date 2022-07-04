import { BadRequestException, Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { User } from '../users/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService
  ) {}

  /**
   *
   * @return return access_token
   */
  async login({ user }) {
    return { access_token: this.jwtService.sign({ ...user }, {}) };
  }

  async findAndValidateUser({ login, password }): Promise<User> {
    const [user] = await this.usersService.findBy({ login: login });

    if (!user) throw new BadRequestException('invalid login');
    if (user.password !== password) throw new BadRequestException('invalid password');

    return user;
  }
}
