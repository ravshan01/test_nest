import { Injectable, NotFoundException } from '@nestjs/common';
import { FindOptionsWhere, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>
  ) {}

  create(createUserDto: CreateUserDto): Promise<User> {
    return this.usersRepository.save(createUserDto);
  }

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  async findOne(id: number): Promise<User> {
    const user: User = await this.usersRepository.findOneBy({ id: id });
    if (!user) throw new NotFoundException();

    return user;
  }

  findBy(options: FindOptionsWhere<User> | FindOptionsWhere<User>[]): Promise<User[]> {
    return this.usersRepository.findBy(options);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.usersRepository.update({ id: id }, updateUserDto);
  }

  remove(id: number) {
    return this.usersRepository.softDelete(id);
  }
}
