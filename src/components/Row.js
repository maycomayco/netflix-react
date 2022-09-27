import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import requests from "../Requests";

const BASE_PATH = "https://image.tmdb.org/t/p/w500/";

const Row = ({ title, fetchURL }) => {
  const [movies, setMovies] = useState([]);
  const [like, setLike] = useState(false);

  useEffect(() => {
    axios.get(requests.requestPopular).then((response) => {
      setMovies(response.data.results);
    });
  }, [fetchURL]);

  return (
    <>
      <h2 className="font-bold p-4 md:text-xl">{title}</h2>

      <div className="relative flex items-center">
        <div id={"slider"}>
          {movies.map((movie) => (
            <div
              key={movie?.id}
              className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2"
            >
              <img
                className="w-full h-full block"
                src={`${BASE_PATH}${movie?.poster_path}`}
                alt={movie?.name}
              />
              <div className="absolute top-0 left-0 w-full h-full opacity-0 hover:bg-black/80 hover:opacity-100 ">
                <p className="white-space-normal text-sm md:text-lg font-bold flex justify-center items-center h-full text-center">
                  {movie?.title}
                </p>
                <p>
                  {like ? (
                    <FaHeart className="absolute top-4 left-4 text-gray-300" />
                  ) : (
                    <FaRegHeart className="absolute top-4 left-4 text-gray-300" />
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Row;
