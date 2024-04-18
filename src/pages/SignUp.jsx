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
    <div className="m-auto flex justify-center items-center">
      <form onSubmit={formik.handleSubmit} className="bg-white p-8 rounded-lg shadow-md mt-28">
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
              className="w-full border rounded-md px-4 py-2 focus:outline-none focus:border-blue-400"
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
              className="w-full border rounded-md px-4 py-2 focus:outline-none focus:border-blue-400"
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
            className="w-full border rounded-md px-4 py-2 focus:outline-none focus:border-blue-400"
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
            className="w-full border rounded-md px-4 py-2 focus:outline-none focus:border-blue-400"
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
    </div>
  );
}
