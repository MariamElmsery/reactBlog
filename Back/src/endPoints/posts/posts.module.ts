import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { postSchema } from './post.Schema';
import { JwtModule } from '@nestjs/jwt';
import { userSchema } from '../users/user.Schema';

@Module({
  imports:[MongooseModule.forFeature([{ name:"posts",
  schema:postSchema},{name:"users",schema:userSchema}]
   
 ),JwtModule.register({secret:'secret',signOptions:{expiresIn:'1d'}})],
  controllers: [PostsController],
  providers: [PostsService],
})
export class PostsModule {}
