import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../interceptor";
import Post from "../Components/Post";

export default function News({currentUser,isUser,posts, setPosts,deletePost}) {
  const navigate = useNavigate();

  const handleAddPost=()=>{
    navigate('/addPost')
  }


  return (

  
    <div >
      <div className="flex justify-end">
      {isUser&&<button onClick={handleAddPost} className="bg-yellow-700 text-white px-3 py-2 rounded mx-5 mb-3 ">Add Post</button>}
      </div>
      {posts.map((post) => (
       <Post key={post._id} post={post}
       currentUser={currentUser}
       deletePost={deletePost}
       
       />
      ))}
    </div>
  );
}
