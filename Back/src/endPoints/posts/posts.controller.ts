import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe, UseGuards, Req } from '@nestjs/common';
import { PostsService } from './posts.service';
import { postWithDto } from './post.withDTO';
import { AuthGuard } from './../users/Auth.Guard';
import { request } from 'http';


@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @UsePipes(ValidationPipe)
  @UseGuards(AuthGuard)
  @Post()
  create(@Body() createPostDto: postWithDto, @Req() request) {
    const reqUser=request.user 
    return this.postsService.create(createPostDto,reqUser);
  }

  @Get()
  findAll() {
    return this.postsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: any) {
    return this.postsService.findOne(id);
  }

  @UseGuards(AuthGuard)
  @Patch(':id')
  update(@Param('id') id:string, @Body() updatePostDto: postWithDto,@Req() request) {
    const userReq=request.user
    return this.postsService.update(id, updatePostDto,userReq);
  }
  
  @UseGuards(AuthGuard)
  @Delete(':id')
  remove(@Param('id') id: any,@Req()request) {
    const userReq=request.user
    
    return this.postsService.remove(id,userReq);
  }
}
