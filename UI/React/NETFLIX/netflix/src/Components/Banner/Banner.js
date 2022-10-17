import React, { useEffect, useState } from "react";
import "./Banner.css";
import { API_KEY, imageUrl } from "../../Constants/constants";
import axios from "../../axios";

function Banner() {
    const [movie, setMovie] = useState([]);
    const [counting, setCount] = useState(0);

    useEffect(() => {
        axios
            .get(
                `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`
            )
            .then((response) => {
                // console.log(response.data.results);
                setMovie(response.data.results);
            });
    }, []);

    return (
        <div className="banner-back">
            {movie.map((m) => (
                <div
                    style={{
                        backgroundImage: `url(
                    ${m ? imageUrl + m.backdrop_path : ""}
                )`,
                    }}
                    className="banner"
                >
                    <div className="content">
                        <h1 className="title">{m ? m.title : ""}</h1>
                        <div className="banner-buttons">
                            <button className="button">Play</button>
                            <button className="button">My List</button>
                        </div>
                        <h1 className="discription">
                            {m ? m.overview : ""}
                        </h1>
                    </div>
                    <div className="fade-bottom"></div>
                </div>
            ))}
        </div>
    );
}

export default Banner;
