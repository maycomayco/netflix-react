import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL, OVERVIEW_MAX_CHARS, POSTER_SIZE } from "../constants";
import requests from "../Requests";
import { truncateString } from "../utils";

const Main = () => {
  const [movies, setMovies] = useState([]);

  const randomMovie = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    axios.get(requests.requestPopular).then((response) => {
      setMovies(response.data.results);
    });
  }, []);

  return (
    <div className="w-full h-[550px]">
      <div className="w-full h-full">
        <div className="absolute w-full h-[550px] bg-gradient-to-r from-black "></div>
        <img
          className="w-full h-full object-cover"
          src={`${BASE_URL}${POSTER_SIZE.main}${randomMovie?.poster_path}`}
          alt={randomMovie?.original_title}
        />
        <div className="absolute w-full top-[20%] p-4">
          <h1 className="text-4xl font-bold mb-3">
            {randomMovie?.original_title}
          </h1>
          <p className="md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] mb-4">
            {truncateString(randomMovie?.overview, OVERVIEW_MAX_CHARS)}
          </p>
          <div className=" mb-4">
            <button className="border bg-gray-300 px-6 py-2  cursor-pointer mr-4">
              Play
            </button>
            <button className="border px-6 py-2  cursor-pointer">
              Watch later
            </button>
          </div>
          <p className="text-sm text-gray-400">
            Released: {randomMovie?.release_date}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
