import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class User extends Document {
    @Prop({ required: true, unique: true })
    discordId: string;

    @Prop({ required: true, unique: true})
    twitterUsername: string;

    @Prop({ required: true })
    address: string;
}

export const UserSchema = SchemaFactory.createForClass(User);

