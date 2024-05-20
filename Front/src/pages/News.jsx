import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../interceptor";
import Post from "../Components/Post";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function News({
  currentUser,
  isUser,
  posts,
  setPosts,
  deletePost,
  isLoading,
}) {
  const navigate = useNavigate();

  const handleAddPost = () => {
    navigate("/addPost");
  };

  if (isLoading) {
    return (
      <>
        <div className=" p-4 bg-white w-96 shadow-md rounded-md m-auto text-center mb-2">
          <Skeleton className="mb-2" width={300} height={200} />
          <Skeleton count={4} width={250} height={20} />
        </div>
        <div className=" p-4 bg-white w-96 shadow-md rounded-md m-auto text-center mb-2">
          <Skeleton className="mb-2" width={300} height={200} />
          <Skeleton count={4} width={250} height={20} />
        </div>
        <div className=" p-4 bg-white w-96 shadow-md rounded-md m-auto text-center mb-2">
          <Skeleton className="mb-2" width={300} height={200} />
          <Skeleton count={4} width={250} height={20} />
        </div>
      </>
    );
  }

  return (
    <div>
      <div className="flex justify-end">
        {isUser && (
          <button
            onClick={handleAddPost}
            className="bg-yellow-700 text-white px-3 py-2 rounded mx-5 mb-3 "
          >
            Add Post
          </button>
        )}
      </div>
      {posts.map((post) => (
        <Post
          key={post._id}
          post={post}
          currentUser={currentUser}
          deletePost={deletePost}
        />
      ))}
    </div>
  );
}
