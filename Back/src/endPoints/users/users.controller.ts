import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe, Res, Req, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';

import { loginWithDto } from './login.withDTO';
import { response } from 'express';
import { userWithDto } from './user.withDTO';
import { AuthGuard } from './Auth.Guard';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @UsePipes(ValidationPipe)
  @Post('reg')
  Registration(@Body() regUser: userWithDto ) {
    try{


      return this.usersService.reg(regUser);
    }
    catch(e){
      console.log(e);
      
    }
  }

  @UsePipes(ValidationPipe)
  @Post('login')
  Login(@Body() loginUser:loginWithDto, @Res({passthrough:true})response){
    return this.usersService.login(loginUser,response);

  }

  @UseGuards(AuthGuard)
  @Get()
  async findCurrentUser(@Req()request) {
    //console.log(await request.user.posts)
    return await request.user;
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.usersService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateUserDto: userWithDto) {
  //   return this.usersService.update(+id, updateUserDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.usersService.remove(+id);
  // }
}
