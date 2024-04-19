import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./Components/Navbar";
import About from "./pages/About";
import News from "./pages/News";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import AddPost from "./pages/AddPost";
import { useEffect, useState } from "react";
import axiosInstance from "./interceptor";
import Post from "./Components/Post";
import { ToastContainer } from "react-toastify";
import EditPost from "./pages/EditPost";

function App() {
  let [currentUser, setCurrentUser] = useState(null);
  const [isUser, setIsUser] = useState(false);
  const [posts, setPosts] = useState([]);

  

  useEffect(() => {
    async function fetchData() {
      const { data } = await axiosInstance.get("http://localhost:3070/posts");    
     
      setPosts(data);
    }
    fetchData();

    async function fetchCurrentUser() {
      if (localStorage.getItem("jwtToken")) {
        const { data } = await axiosInstance.get("http://localhost:3070/users");
        setCurrentUser(data);
        setIsUser(true)
      }
    }
    fetchCurrentUser();
    async function fetchPosts() {
      const { data } = await axiosInstance.get("http://localhost:3070/posts");

      setPosts(data);
    }
    fetchPosts();
  }, []);

  const getPost = (id) => {
    const index = posts.findIndex((post) => id == post._id);
    return posts[index];
  };

  const addPost = (post) => {
    // clone & update
    let newPosts = [ post,...posts];
    currentUser.posts=[post, ...currentUser.posts]
    // state
    //@ts-ignore
    setPosts(newPosts);
  };
  const editPost = (updatedPost) => {
    //clone & update
    let newPosts = posts;
    //@ts-ignore
    let index = newPosts.findIndex((post) => post._id == updatedPost._id);
    //@ts-ignore
    newPosts[index] = { ...updatedPost };
    // state
    setPosts(newPosts);
  };

  const deletePost = (id) => {
    //@ts-ignore
    let newPosts = posts.filter((post ) => post._id !== id);
    currentUser.posts=currentUser.posts.filter((post ) => post._id !== id);
    setPosts(newPosts);
  };
  
  return (
    <>
      <BrowserRouter>
        <Navbar isUser={isUser} setIsUser={setIsUser} setCurrentUser={setCurrentUser}/>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/news" element={<News posts={posts} setPosts={setPosts} isUser={isUser} currentUser={currentUser}  deletePost={deletePost}/>} />
          <Route path="/sign" element={<SignUp />} />
          <Route path="/login" element={<Login setIsUser={setIsUser} setCurrentUser={setCurrentUser}/>} />
          <Route path="/addPost" element={<AddPost addPost={addPost}/>} />
          <Route
            path="/editPost/:id"
            element={<EditPost getPost={getPost} editPost={editPost} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
