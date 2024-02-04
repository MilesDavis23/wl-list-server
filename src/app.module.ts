import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';

const mongoDBURL = 'mongodb+srv://fldsptrtms:tpCQ5XvzV5XJurLV@wllist0.nlwicuz.mongodb.net/?retryWrites=true&w=majority'

@Module({
  imports: [
    MongooseModule.forRoot(mongoDBURL)
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
/* tpCQ5XvzV5XJurLV  fldsptrtms 45.155.40.83/32*/