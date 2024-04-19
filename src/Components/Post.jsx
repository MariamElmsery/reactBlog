import axios from "axios";
import PenSVG from "../SVG/PenSVG";
import TrashSVG from "../SVG/TrashSVG";
import { useEffect, useState } from "react";
import axiosInstance from "../interceptor";
import { useNavigate, useParams } from "react-router-dom";

export default function Post({ post, currentUser,deletePost }) {
  //const res = useParams();
  const navigate =useNavigate()
 
  const posts = currentUser?.posts?.map((post) => post._id) || []
  console.log(posts);

  const handelEdit = (id) => {
    console.log(id);
  };

  const handelDelete = async (id) => {
    const res = await axiosInstance.delete(`http://localhost:3070/posts/${id}`);
    deletePost(id)
    console.log(res);
  };

  return (
    <div className=" flex  m-auto mx-20" >


<div className="w-3/4 xl:w-6/12 bg-base-100 shadow-xl m-auto image-full flex-col mb-3">
  <div className="w-full overflow-hidden max-h-96">
  <figure><img src={post.image} alt="Shoes" className=" w-full"/></figure>


  </div>
  <div className="card-body">
    <h2 className="card-title text-black font-bold pb-3">{post.title}</h2>
    <p className="text-black">{post.description}</p>
    <div className="card-actions justify-end">
    {posts.includes(post._id) && (
        <div
          className=" pt-4 px-2   text-blue-900 "
          onClick={() =>navigate("/editPost/"+post._id)}
        >
          <PenSVG/>{" "}
        </div>
      )}
      {posts.includes(post._id) && (
        <div
          className="pt-4 px-2 text-red-900 "
          onClick={() => handelDelete(post._id)}
        >
          {" "}
          <TrashSVG  />
        </div>
      )}
    </div>
  </div>
</div>

      {/* <div key={post._id} className="rounded p-2 w-96 m-auto ">
      <img className="rounded " src={post.image} alt="img" />
      <div className="p-2">
        <h2 className="font-bold">{post.title}</h2>
        <div className=''>{post.description}</div>
      </div>
    </div> */}
    </div>
  );
}
