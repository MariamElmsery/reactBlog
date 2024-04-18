import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="navbar bg-base-100 text-white  mb-4 ">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className=" btn btn-ghost lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className=" text-white menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
             
              <li>
                <Link to='/news'>News</Link>
              </li>
              <li>
              <Link to='/login'>Login</Link>
         
              </li>
              <li>
              <Link to='/sign'>Sign up</Link>
              </li>
              {/* <li>
                <Link to='/about'>About Me</Link>
              </li> */}
            </ul>
          </div>
          <Link to='/home' className="btn btn-ghost text-xl font-serif">News Wave</Link>
        </div>
        <div className="navbar-start hidden lg:flex">
                {/* <Link to='/home' className="btn btn-ghost">Home</Link> */}
          <ul className="menu menu-horizontal px-1">
          <li>
              </li>
              <li>
                <Link to='/news'>News</Link>
              </li>
              <li>
              <Link to='/login' >Login</Link>
         
              </li>
              <li>
              <Link to='/sign' >Sign up</Link>
              </li>
            
              {/* <li>
                <Link to='/about'>About Me</Link>
              </li> */}
          </ul>
        </div>
        {/* <div className="navbar-end mr-36">
        <Link to='/login' className="mx-3 btn btn-ghost hover:text-yellow-400">Login</Link>
          <Link to='/sign' className="mx-3 btn btn-ghost hover:text-yellow-400">Sign up</Link>
        </div> */}
      </div>
    </>
  );
}
