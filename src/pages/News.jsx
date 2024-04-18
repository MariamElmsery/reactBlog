import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../interceptor";
import Post from "../Components/Post";

export default function News({currentUser}) {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  const handleAddPost=()=>{
    navigate('/addPost')
  }

  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get("http://localhost:3070/posts");
     
     
      setPosts(data);
    }
    fetchData();
  }, []);

  const handelUpdate=(id)=>{
   console.log(id);
  }
  
  return (
    <div >
      <div className="flex justify-end">
      <button onClick={handleAddPost} className="bg-yellow-700 text-white px-3 py-2 rounded mx-5 mb-3 ">Add Post</button>
      </div>
      {posts.map((post) => (
       <Post post={post}
       currentUser={currentUser}
       
       />
      ))}
    </div>
  );
}
