import { useFormik } from 'formik'
import React from 'react'

import axiosInstance from '../interceptor';
import { useNavigate } from 'react-router-dom';

export default function AddPost() {

    const navigate=useNavigate();
    const formik=useFormik({
        initialValues:{
            title:'',
            description:'',
            image:''
        },
        // validationSchema:Yub.object({
        //     title:Yub.string().required("title id required")
        // }),
        
        onSubmit: async (values) => {
          
             try {
               const response = await axiosInstance.post(
                 "http://localhost:3070/posts",
                 values
               );
               console.log(response);
               if (response.status ==201) {
                 navigate("/home");
               }
               console.log(response);
             } catch (error) {
               console.log(error);
             }
           }
        })
  return (
    <div className="flex justify-center items-center">
      <form onSubmit={formik.handleSubmit} className="bg-white p-8 rounded-lg shadow-md mt-28">
       
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
            className="w-full border rounded-md px-4 py-2 focus:outline-none focus:border-blue-400"
          />
          
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
            className="w-full border rounded-md px-4 py-2 focus:outline-none focus:border-blue-400"
          />
         
        </div>
        <div className="mb-6">
          <label htmlFor="image" className="block">
            Choose Image
          </label>
          <input
            type="file"
            id="image"
            name="image"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.image}
            className="w-full border rounded-md px-4 py-2 focus:outline-none focus:border-blue-400"
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
