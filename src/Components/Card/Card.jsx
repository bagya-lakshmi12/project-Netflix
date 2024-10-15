import "./Card.css";
import { FaAngleDown, FaPlayCircle, FaPlus, FaThumbsUp } from "react-icons/fa";
// import { FaHeart } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";

import { addToWishlist } from "..//..//api/Movie";
const baseUrl = "https://image.tmdb.org/t/p/w500";

const Card = ({ movie, style, favMovies }) => {
  // console.log(favMovies);
  const isEqual = favMovies?.includes(movie?.id);
  console.log(isEqual);
  return (
    <div className={`single-card  ${style || ""} `}>
      <div className="card-img">
        <img
          src={`${baseUrl}${movie.backdrop_path || movie.poster_path}`}
          alt="single movie card"
          className="test"
        />
        <div className="card-content">
          <div className="icons">
            <div className="left-icons">
              <FaPlayCircle className="play-icon" />
              <FaPlus
                onClick={() => addToWishlist(movie.id)}
                fill={isEqual ? "red" : "white"}
                className={`plus-icon `}
              /><span className="add-alert">Add to My List</span>
              <FaThumbsUp className="thumbs-up" /><span className="like-alert">I Like this</span>
              {/* <FaThumbsDown className="thumbs-down"/> */}
              <FaAngleDown className="angle-down" /><span className="more-alert">More Info</span>
            </div>
            <div className="rating">
              <div className="rating-value">
                <FaStar className="star-icon" />
                {movie.vote_average.toFixed(1)} /10
              </div>
            </div>
          </div>
          <h3 className="movie-title">{movie.title || movie.name}</h3>
        </div>
      </div>
    </div>
  );
};

export default Card;