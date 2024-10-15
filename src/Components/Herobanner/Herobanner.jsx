import React, { useEffect, useState } from "react";
import "./Herobanner.css";
import Navbar from "../Navbar/Navbar";
import smi from "..//..//assets/profile.png";
import nl from "..//..//assets/Netflix-Logo.wine.svg";
// import Heading from "../Text/Text";
// import Button from "../Btn/Btn";
import { FaPlay } from "react-icons/fa";
// import Content from "../heading/Content";
import { getPageData } from "..//..//api/Movie";
import { AiTwotoneExclamationCircle } from "react-icons/ai";
import Text from "../Text/Text";
import cl from "..//..//assets/children-logo.png";
import Btn from "../Btn/Btn";

const Herobanner = () => {
  const baseUrl = "https://image.tmdb.org/t/p/original";
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await getPageData();
        const randomIndex = Math.floor(
          Math.random() * response?.netflixOriginals?.results.length
        );
        setMovie(response?.netflixOriginals?.results[randomIndex]);
      } catch (error) {
        console.error("Error fetching movie:", error);
      }
    };

    fetchMovie();

    const intervalId = setInterval(fetchMovie, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const handleDescription = (data, n) => {
    return data?.length > n ? data.substring(0, n) + "..." : data;
  };

  return (
    <main className="hero-banner">
      <Navbar smile={smi} netlogo={nl} childlogo={cl}/>
      {movie && (
        <>
          <div className="hero-img">
            <img
              src={`${baseUrl + movie?.backdrop_path}`}
              alt="hero banner img"
            />
          </div>
          <div className="hero-content">
            <Text value={movie?.name || movie?.title} className="movie-name"/>
            <div className="hero-buttons">
              <Btn
                size0="small-play"
                icon0={<FaPlay />}
                color0="black"
                bg0="bg-white"
                value0="Play"
                home="home"
              />
              <Btn
                size0="small-play"
                icon0={<AiTwotoneExclamationCircle className="moreicon" />}
                className="watchlater"
                color0="white"
                bg0="bg-trans"
                value0="More Info"
                home1="home1"
              />
            </div>
            <Text
              className="hero-text"
              value={handleDescription(movie?.overview, 200)}
            />
            <div className="right-corner">
                <div className="right-content">
                    <p>U/A 16+</p>
                </div>
                <div className="right-img">
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
</svg>
                </div> 

            </div>
          </div>
        </>
      )}
    </main>
  );
};

export default Herobanner;








// import React from 'react'
// import Navbar from '../Navbar/Navbar'


// const Herobanner = () => {
//   return (
//     <div>
      
      
//     </div>
//   )
// }

// export default Herobanner
