import { Controller, Post, Body, HttpException, HttpStatus } from '@nestjs/common';
import { UsersService } from './users.service';
 
@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Post('check')
    async checkUser(@Body() body: { discordId: string; twitterUsername: string }) {
        const user = await this.usersService.findUser(body.discordId,  body.twitterUsername);
        console.log(body)
        console.log(user)
        if (user) {
            throw new HttpException('User is already registered.', HttpStatus.BAD_REQUEST);
        }
        return { message: 'User can register.' };
    }

    @Post('register')
    async registerUser(@Body() body: { discordId: string; twitterUsername: string; address: string}) {
        const userExists = await this.usersService.findUser(body.discordId, body.twitterUsername);
        if (userExists) {
            throw new HttpException('User is already registered', HttpStatus.BAD_REQUEST);
        }
        const newUser = await this.usersService.createUser(body.discordId, body.twitterUsername, body.address);
        return {newUser: newUser, message: 'New user is registered.' };
    }
};
