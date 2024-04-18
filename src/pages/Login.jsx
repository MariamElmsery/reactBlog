import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function SignUp() {
  const navigate = useNavigate();
  const notify = () => toast("Wow so easy!");


  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },

    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Email is required"),
      password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required")
    }),

    onSubmit: async (values) => {
      try {
        const res = await axios.post("http://localhost:3070/users/login", values);
        if (res.data.response.statusCode !== 200) {
          console.log("Invalid email or Password");
          toast.error("Invalid email or password");
        } else {
          localStorage.setItem("jwtToken", res.data.jwttoken);
          toast.success("Login successful");
          setTimeout(()=>navigate("/"),2000); // Redirect to home page after successful login
        }
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    }
  });

  return (
    <div className="card lg:card-side bg-base-100 shadow-xl m-auto w-7/12 mt-16 ">

      <ToastContainer /> {/* Add ToastContainer component */}
      <figure className="h-auto">
        <img src="https://img.freepik.com/free-vector/computer-login-illustration-concept_114360-23362.jpg?t=st=1713438084~exp=1713441684~hmac=50915e0a15e2708bbf580a1ddd4616c1ec3f51abfcd3350c3bb697013d8c5cfa&w=340" alt="Album" />
      </figure>
      <div className="card-body">
        <h2 className="card-title mt-10">
          <form onSubmit={formik.handleSubmit} >

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
