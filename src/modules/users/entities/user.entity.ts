import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  DeleteDateColumn,
} from 'typeorm';
import { Exclude } from 'class-transformer';
import IUser from '../interfaces/IUser';

@Entity('users')
export class User implements IUser {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  login: string;

  @Column()
  @Exclude()
  password: string;

  @Column()
  name: string;

  @Column()
  country: string;

  @CreateDateColumn()
  @Exclude()
  created_at: Date;

  @DeleteDateColumn()
  @Exclude()
  deleted_at: Date;
}
