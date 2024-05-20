import { Injectable } from '@nestjs/common';
import { userWithDto } from './user.withDTO';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt';
import { Response, response } from 'express';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UsersService {

  constructor(@InjectModel('users')private userModel,private jwt:JwtService){

  }

  async reg(user){
    try{

      let foundedUser= await this.userModel.findOne({email:user.email.toLowerCase()})
      
      if(foundedUser)return {message:"user already exist", response:response.status(401)} 
       
      let salt = await bcrypt.genSalt(10);
      let hashPassword= await bcrypt.hash(user.password,salt);
      user.email=user.email.toLowerCase();
      user.password=hashPassword;
  
      let newUser=new this.userModel(user)
      await newUser.save();
      return {message:"User added successfully",Data:newUser,response:response.status(200)}
    }
    catch(e){
      console.log(e);
      

    }

  }

  async login(user,res:Response){
    let foundedUser=await this.userModel.findOne({email:user.email.toLowerCase()}).populate('posts')
    if(!foundedUser)return {message:'inValid email or Password',response:response.status(401)}

    let checkPass=await bcrypt.compare(user.password,foundedUser.password);
    if(!checkPass)return {message:'inValid email or Password',response:response.status(401)}

    let jwtData=this.jwt.sign({email:user.email,_id:user._id,isAdmin:user.isAdmin})
    res.header("jwttoken",jwtData);


    return {message:"logged in Successfully",response:response.status(200), "jwttoken":jwtData, user:foundedUser}
    
  }
 
  findAll() {
    return this.userModel.find({}).populate('posts');
  }

 
}
