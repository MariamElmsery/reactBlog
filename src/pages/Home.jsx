import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const seeMore = () => {
    navigate("/news");
  };

  return (
    <div className="container ">
      <div className="mb-4  ">
        <img
          className="rounded-box m-auto w-9/12 "
          src="https://media.istockphoto.com/id/1140691120/photo/business-and-technology-concept-smart-office.jpg?s=612x612&w=0&k=20&c=0CWifRV1AX7yjXwMkCAmwWoMgceTfYoSvnf93ms-b_E="
        />
      </div>

      <div className=" mx-40 flex justify-between items-center">
        <div className="font-bold mb-2 font-serif text-2xl text-white">
          News
        </div>
        <button
          onClick={seeMore}
          className="btn bg-yellow-700 text-white "
        >
          See More
        </button>
      </div>

      <div className="flex justify-around mx-36 m-2">
        <div className="card w-72 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src="https://i-invdn-com.investing.com/news/Brazil-Stock-Market_3_800x533_L_1414427437.jpg"
              alt="Shoes"
              className="rounded-xl aspect-square"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title pb-2 text-white">Wall St set for higher open as upbeat earnings obscure Mideast
              jitters</h2>
            <p> By Shashwat Chauhan and Shristi Achar A (Reuters) -Wall Street's
              main stock indexes were on track for a higher open on Tuesday,
              with health insurers leading the charge following upbeat results
              from … [+2965 chars]</p>
            {/* <div className="card-actions">
              <button className="btn btn-primary">Buy Now</button>
            </div> */}
          </div>
        </div>
        <div className="card w-72 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src="https://www.tagesspiegel.de/images/brandenburgs-cdu-fraktions-und-landeschef-jan-redmann1/alternates/BASE_16_9_W1400/brandenburgs-cdu-fraktions--und-landeschef-jan-redmann.jpeg"
              alt="Shoes"
              className="rounded-xl aspect-square"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title  text-white pb-2">Stromnetz-Engpass in Oranienburg: Brandenburgs CDU-Chef beklagt
              mangelnde Vorbereitung auf Energiewende</h2>
            <p> Nach dem Stromnetz-Engpass in Oranienburg sieht der
              CDU-Fraktionschef im brandenburgischen Landtag, Jan Redmann, auch
              Gefahren für andere Kommunen im Berliner Speckgürtel. Die
              Energiewende führt </p>
            {/* <div className="card-actions">
              <button className="btn btn-primary">Buy Now</button>
            </div> */}
          </div>
        </div>
        <div className="card w-72 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src="https://c.biztoc.com/p/52a89de389ab4625/s.webp"
              alt="Shoes"
              className="rounded-xl aspect-square "
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title  text-white pb-2">Tesla layoffs hit high performers, some departments slashed,
              sources say</h2>
            <p> Nach dem Stromnetz-Engpass in Oranienburg sieht der
              CDU-Fraktionschef im brandenburgischen Landtag, Jan Redmann, auch
              Gefahren für andere Kommunen im Berliner Speckgürtel. Die
              Energiewende führt dazu</p>
            {/* <div className="card-actions">
              <button className="btn btn-primary">Buy Now</button>
            </div> */}
          </div>
        </div>
      </div>

      
    </div>
  );
}
