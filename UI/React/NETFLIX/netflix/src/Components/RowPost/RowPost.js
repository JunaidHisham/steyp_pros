import React, { useEffect, useState } from "react";
import "./RowPost.css";
import { imageUrl } from "../../Constants/constants";
import axios from "../../axios";

function RowPost(props) {
    const [movie, setMovies] = useState([]);
    useEffect(() => {
        axios
            .get(props.url)
            .then((response) => {
                // console.log(response.data.results);
                setMovies(response.data.results);
            })
            .catch((err) => {
                // alert("Network Error");
            });
    }, []);
    return (
        <div className="row">
            <h2>{props.title}</h2>
            <div className="posters">
                {movie.map((obj) => (
                    <div className={props.isSmall ? "small-poster" : "poster"}>
                        <img src={imageUrl + obj.backdrop_path} alt="poster" />
                        <h4>{obj.name}</h4>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default RowPost;
