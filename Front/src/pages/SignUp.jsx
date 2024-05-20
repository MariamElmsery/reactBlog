import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

export default function SignUp() {
  const navigate=useNavigate();
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: ""
    },

    validationSchema: Yup.object({
      firstName: Yup.string().required("First Name is required"),
      lastName: Yup.string().required("Last Name is required"),
      email: Yup.string().email("Invalid email address").required("Email is required"),
      password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required")
    }),

    onSubmit: async (values) => {
      try {
        const res=await axios.post("http://localhost:3070/users/reg", values);
        // console.log(res.data)
        if(res.data.response.statusCode!==200) {navigate('/login');}

        else {navigate('/login')}
       
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    }
  });

  return (
    <div className="card lg:card-side bg-base-100 shadow-xl m-auto w-8/12 mt-16">
  <figure className="h-auto"><img src="https://img.freepik.com/free-vector/placeholder-concept-illustration_114360-8289.jpg?t=st=1713436499~exp=1713440099~hmac=a5b7f4fb96c57d56f10f4cb35c5d84b2586a66f7b9a2c9804541b659393aae34&w=540" alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title mt-10">
    <form onSubmit={formik.handleSubmit} >
        <div className="flex justify-center items-center gap-2">
          <div>
            <label htmlFor="fname" className="block">
              First Name
            </label>
            <input
              type="text"
              id="fname"
              name="firstName"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.firstName}
              className="w-full  rounded-md px-4 py-2 focus:outline-none focus:border-blue-400"
            />
            {formik.touched.firstName && formik.errors.firstName ? (
              <div className="text-red-500">{formik.errors.firstName}</div>
            ) : null}
          </div>
          <div>
            <label htmlFor="lname" className="block">
              Last Name
            </label>
            <input
              type="text"
              id="lname"
              name="lastName"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.lastName}
              className="w-full  rounded-md px-4 py-2 focus:outline-none focus:border-blue-400"
            />
            {formik.touched.lastName && formik.errors.lastName ? (
              <div className="text-red-500">{formik.errors.lastName}</div>
            ) : null}
          </div>
        </div>
        <div>
          <label htmlFor="email" className="block">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            className="w-full  rounded-md px-4 py-2 focus:outline-none focus:border-blue-400"
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="text-red-500">{formik.errors.email}</div>
          ) : null}
        </div>
        <div className="mb-6">
          <label htmlFor="pass" className="block">
            Password
          </label>
          <input
            type="password"
            id="pass"
            name="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            className="w-full rounded-md px-4 py-2 focus:outline-none focus:border-blue-400"
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="text-red-500">{formik.errors.password}</div>
          ) : null}
        </div>
        <button
          type="submit"
          className="w-full bg-yellow-700 text-white py-2 px-4 rounded-md"
          disabled={formik.isSubmitting || !formik.isValid}
        >
          {formik.isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
      

    </h2>
   
   
  </div>
</div>
   
  );
}
