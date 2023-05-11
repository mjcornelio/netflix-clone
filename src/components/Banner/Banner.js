import axios from "../../axios";
import React, { useEffect, useState } from "react";
import "./Banner.css";
import requests from "../../Requests";

function Banner({ preview }) {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      if (preview === null) {
        setMovie(
          request.data.results[
            Math.floor(Math.random() * request.data.results.length - 1)
          ]
        );
      } else {
        setMovie(preview);
      }
      return request;
    }
    fetchData();
  }, [preview]);

  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }
  return (
    <>
      <div
        className="banner__front"
        style={{
          backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
          backgroundSize: "cover",
          backgroundPosition: "top center",
          objectFit: "cover",
          width: "100%",
          height: "500px",
        }}
      >
        <div className="banner_content">
          <h1 className="banner_title">
            {movie?.name || movie?.original_name || movie?.title}
          </h1>
          <div className="banner_buttons">
            <button className="banner_button">Play</button>
            <button className="banner_button">My List</button>
          </div>
          <h1 className="banner_description">
            {truncate(movie?.overview, 150)}
          </h1>
        </div>
      </div>
    </>
  );
}

export default Banner;
