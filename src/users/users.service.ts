import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.schema';

@Injectable()
export class UsersService {
    constructor(@InjectModel(User.name) private userModel: Model<User>) {}

    async findUser(discordId: string, twitterUsername: string): Promise<User | undefined> {
        return this.userModel.findOne({ discordId, twitterUsername }).exec();
    }

    async createUser(discordId: string, twitterUsername: string, address: string): Promise<User> {
        const newUser = new this.userModel({ discordId, twitterUsername, address });
        return newUser.save();
    }
};
