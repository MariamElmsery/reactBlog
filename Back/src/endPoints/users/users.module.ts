import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { userSchema } from './user.Schema';
import { JwtModule } from '@nestjs/jwt';
import { postSchema } from '../posts/post.Schema';

@Module({

  imports:[MongooseModule.forFeature([{name:'users',schema:userSchema},{name:'posts',schema:postSchema}])
  ,JwtModule.register({secret:'secret',signOptions:{expiresIn:'1d'}})],
  
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
