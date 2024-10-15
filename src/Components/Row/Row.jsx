import { useEffect, useState } from "react";
import { getWishlist } from "..//..//api/Movie";
import Carousel from "../Carousel/Carousel";
// import List from "./List";
import Card from "../Card/Card";
import "./Row.css";

const Row = ({ title, data }) => {
	const [movies, setMovies] = useState([]); // getting favourite movies and sending as prop to card
	useEffect(() => {
		getWishlist().then((data) => setMovies(data.results));
	}, []);
	const movieId = movies?.map((item) => item.id);

	return (
		<section>
			{title && <h2 className="section-title">{title}</h2>}
			<Carousel // sending the movie datas to
				data={data}
				render={(item) => <Card movie={item} favMovies={movieId} />}
			/>
		</section>
	);
};

export default Row;