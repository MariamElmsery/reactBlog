import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="navbar bg-transparent text-white   mb-4 ">
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
           
          </div>
          <Link to='/' className="btn btn-ghost text-xl font-serif mx-3 ">News Wave</Link>
          <Link className="btn btn-ghost hover:text-yellow-500"  to='/news'>News</Link>
        </div>
        
        <div className="navbar-end ">
        
        <Link className='btn text-white border-none bg-yellow-700' to='/sign' >Sign up</Link>

        </div>
      </div>
    </>
  );
}
