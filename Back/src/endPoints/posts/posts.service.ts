import { Injectable } from '@nestjs/common';
import { postWithDto } from './post.withDTO';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class PostsService {
  constructor(@InjectModel('posts') private postModel ,@InjectModel('users')private userModel ){}

  async create(createPostDto: postWithDto,user) {
    try{

      let newPost= new this.postModel(createPostDto);
      await newPost.save();
  
      await this.userModel.updateOne({email:user.email},{$push:{posts:newPost}})
      // console.log(user);
      
      return newPost;
    }
    catch(e){
      console.log(e);
      
    }
  }

  findAll() {
    return this.postModel.find({});
  }

  async findOne(id: number) {
    const post= await this.postModel.findById({_id:id})
    return post;
  }


   async update(id: string, updatePostDto: postWithDto,user) {
   
    const userPost=await this.userModel.findOne({email:user.email})
    console.log(userPost.posts);
    
    if(userPost.posts.includes(id)){
      const userPost=await this.userModel.findOne({email:user.email})
      const updatedPost=await this.postModel.findByIdAndUpdate(id,updatePostDto)
      // if(!updatePostDto) return {message:"this post not found"}
    
    return  {message:"updated successfully"};
    }
    else return {message:"unAuthorize"}
  }

  async remove(id:string,user) {

    const userPost=await this.userModel.findOne({email:user.email})
    
    if(userPost.posts.includes(id)){
      const deletedPost= await this.postModel.findByIdAndDelete(id)
      if(!deletedPost)return {message:"this post is not found"}
      //pull to delete post
      const updated=await this.userModel.updateOne({email:user.email},{$pull:{posts:id}})
      return {message:"Deleted successfully"};
    }
    else return {message:"unAuthorize"}
    
  }
}
