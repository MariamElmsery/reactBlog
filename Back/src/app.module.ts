import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './endPoints/users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { PostsModule } from './endPoints/posts/posts.module';


@Module({
  imports: [UsersModule,PostsModule,MongooseModule.forRoot('mongodb://localhost:27017/Blog'),
  JwtModule.register({secret:'secret',signOptions:{expiresIn:'1d'}})],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
