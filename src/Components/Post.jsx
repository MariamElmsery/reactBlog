import axios from 'axios'
import PenSVG from '../SVG/PenSVG';
import TrashSVG from '../SVG/TrashSVG';
import { useEffect, useState } from 'react';
import axiosInstance from '../interceptor';
import { useParams } from 'react-router-dom';



export default function Post({post,currentUser}) {

    const [deletedpost,setState]=useState(false)
    const res=useParams()
    console.log(res);


  
    console.log(currentUser.posts);
   const posts= currentUser?.posts?.map((post)=>post._id)
   console.log(posts);

   const handelEdit=(id)=>{
    console.log(id);

   }

  
    const handelDelete= async(id)=>{
    const res = await axiosInstance.delete(`http://localhost:3070/posts/${id}`)
    console.log(res);

   }
    
   
  return (
    <div  className=" flex  m-auto " style={{width:'450px'}}>
   

        {posts.includes(post._id)&& <div className=' pt-4 px-2   text-blue-900' onClick={()=>handelEdit(post._id)}><PenSVG/> </div>}
        {posts.includes(post._id)&& <div className='pt-4 px-2 text-red-900' onClick={()=>handelDelete(post._id)}> <TrashSVG/></div>}

    <div key={post._id} className="rounded p-2 w-96 m-auto ">
      <img className="rounded " src={post.image} alt="img" />
      <div className="p-2">
        <h2 className="font-bold">{post.title}</h2>
        <div className=''>{post.description}</div>
      </div>
    </div>
  </div>
  )
}