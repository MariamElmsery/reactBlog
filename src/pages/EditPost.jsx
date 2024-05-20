import { useFormik } from 'formik'
import React, { useEffect, useState } from 'react'
import axiosInstance from '../interceptor';
import { useNavigate, useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as Yub from 'yup';

export default function EditPost({getPost,editPost}) {
    const {id}= useParams()

    const post= getPost(id)
    console.log(post)


    const navigate=useNavigate();
    
    const formik=useFormik({
        initialValues:{
            title:post?.title?post.title: "",
            description: post?.description?post.description: "",
            image:post?.image?post.image: "",
        },

        // validationSchema:Yup.object({
        //     title:Yub.string().required("title is required"),
        //     description:Yub.string().required("Content is required"),
        //     image:Yub.string()
        // }),
        
        onSubmit: async (values) => {
          
             try {
               const response = await axiosInstance.patch(
                 "http://localhost:3070/posts/"+id,
                 values
               );
               //console.log(response);
                toast.success("Post Edited Successfully");
                setTimeout(()=>navigate("/news"),2000); 
                //console.log({post,...values})
                editPost({...post,...values})
               
              // console.log(response);
             } catch (error) {
               console.log(error);
               toast.error("some thing wrong");
             }
           }
        })
  return (
    <div className="card lg:card-side bg-transparent shadow-2xl m-auto w-4/12 ">
      <form onSubmit={formik.handleSubmit} className=" p-8 rounded-lg shadow-sm m-auto">
      {/* <ToastContainer />  */}
        <div>
          <label htmlFor="title" className="block">
           Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.title}
            className="w-full rounded-md px-4 py-2 focus:outline-none focus:border-blue-400"
          />
           {/* {formik.touched.title && formik.errors.title ? (
                <div className="text-red-500">{formik.errors.title}</div>
              ) : null}
           */}
        </div>
        <div className="mb-6">
          <label htmlFor="description" className="block">
            Content
          </label>
          <textarea
            type="text"
            id="description"
            name="description"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.description}
            className="w-full  rounded-md px-4 py-2 focus:outline-none focus:border-blue-400"
          />
           {/* {formik.touched.description && formik.errors.description ? (
                <div className="text-red-500">{formik.errors.description}</div>
              ) : null} */}
         
        </div>
        <div className="mb-6">
          <label htmlFor="image" className="block">
            Choose Image
          </label>
          <input
            type="text"
            id="image"
            name="image"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.image}
            className="w-full  rounded-md px-4 py-2 focus:outline-none focus:border-blue-400"
          />
         
        </div>
        <button
          type="submit"
          className="w-full bg-yellow-700 text-white py-2 px-4 rounded-md"
          disabled={formik.isSubmitting || !formik.isValid}
        >
          {formik.isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  )
}
