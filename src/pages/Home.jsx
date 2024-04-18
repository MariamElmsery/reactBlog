import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export default function Home() {
  
  const navigate = useNavigate();

  const seeMore = () => {
    navigate("/news");
  };

  
  return (
    <div className="container">
      <div className="mb-4 ">
        <img
          className="rounded-box m-auto"
          src="https://images.pexels.com/photos/97050/pexels-photo-97050.jpeg?auto=compress&cs=tinysrgb&w=1460&h=650&dpr=1"
          alt=""
        />
      </div>

      <div className=" mx-40 flex justify-between items-center">
        <div className="font-bold mb-2 font-serif text-2xl">News</div>
        <button
          onClick={seeMore}
          className="bg-yellow-700 text-white px-3 py-2 rounded"
        >
          See More
        </button>
      </div>

      {/* <div className="flex flex-wrap justify-around mx-40"> */}
      <div className=" flex  justify-around  mx-40 m-2">
        <div className=" rounded p-2">
          <img
            className="rounded w-full h-64"
            src="https://i-invdn-com.investing.com/news/Brazil-Stock-Market_3_800x533_L_1414427437.jpg"
            alt="img"
          />
          <div className="p-2">
            <h2 className="font-bold">
              Wall St set for higher open as upbeat earnings obscure Mideast
              jitters
            </h2>
            <div>
              By Shashwat Chauhan and Shristi Achar A (Reuters) -Wall Street's
              main stock indexes were on track for a higher open on Tuesday,
              with health insurers leading the charge following upbeat results
              from … [+2965 chars]
            </div>
          </div>
        </div>
        {/* 222 */}
        <div className=" rounded p-2">
          <img
            className="rounded w-full h-64 "
            src="https://www.tagesspiegel.de/images/brandenburgs-cdu-fraktions-und-landeschef-jan-redmann1/alternates/BASE_16_9_W1400/brandenburgs-cdu-fraktions--und-landeschef-jan-redmann.jpeg"
            alt="img"
          />
          <div className="p-2">
            <h2 className="font-bold">
              Stromnetz-Engpass in Oranienburg: Brandenburgs CDU-Chef beklagt
              mangelnde Vorbereitung auf Energiewende
            </h2>
            <div>
              Nach dem Stromnetz-Engpass in Oranienburg sieht der
              CDU-Fraktionschef im brandenburgischen Landtag, Jan Redmann, auch
              Gefahren für andere Kommunen im Berliner Speckgürtel. Die
              Energiewende führt dazu… [+1446 chars]
            </div>
          </div>
        </div>
        {/* 333 */}
        <div className=" rounded p-2">
          <img
            className="rounded w-full h-64 "
            src="https://c.biztoc.com/p/52a89de389ab4625/s.webp"
            alt="img"
          />
          <div className="p-2">
            <h2 className="font-bold">
              Tesla layoffs hit high performers, some departments slashed,
              sources say
            </h2>
            <div>
              Tesla layoffs hit high performers, some departments slashed,
              sources say 'I lost 20% of my team, some really good players
              too'Tesla management told employees Monday that the recent layoffs
              which gutt… [+316 chars]
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}
