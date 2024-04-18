
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Navbar from './Components/Navbar'
import About from './pages/About'
import News from './pages/News'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import AddPost from './pages/AddPost'
import { useEffect, useState } from 'react'
import axiosInstance from './interceptor'
import Post from './Components/Post'
import { ToastContainer } from 'react-toastify'

function App() {
  
  const [currentUser,setState]=useState(null);

  
 
  useEffect(()=>{
    async function fetchData(){
     const {data}= await axiosInstance.get("http://localhost:3070/users")
     setState(data);
     console.log(data);
     console.log(currentUser);

    }
    fetchData()

  },[])

  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <ToastContainer />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/news' element={<News currentUser={currentUser}/>}/>
        <Route path='/sign' element={<SignUp/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/addPost' element={<AddPost/>}/>
       
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
