import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from 'src/auth/local-auth.guard';
import { User } from 'src/globals/interfaces';
import { UsersService } from '../service/users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post('new-user')
  createUser(@Body() user: User): Promise<User> {
    try {
      return this.usersService.createUser(user);
    } catch (error) {
      console.error(error);
    }
  }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Request() req): Object {
    return { code: 0, message: 'You are logged In!' };
  }
}
