import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from '../users.entity';
import * as bcrypt from 'bcrypt';
import { User } from 'src/globals/interfaces';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users) private readonly users: Repository<Users>,
  ) {}

  async createUser(user: User): Promise<User> {
    const hash = await bcrypt.hash(user.password, 10);
    try {
      return this.users.save({
        ...user,
        username: user.username,
        password: hash,
      });
    } catch (error) {
      console.error(error);
    }
  }

  findByUsername(username: string): Promise<User | undefined> {
    return this.users.findOne({ where: { username } });
  }
}
