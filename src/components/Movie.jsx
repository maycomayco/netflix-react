import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";

const Movie = ({ movie, basePath }) => {
  const [like, setLike] = useState(false);
  const [saved, setSaved] = useState(false);
  const { user } = UserAuth();

  const handleLike = async () => {
    if (user?.email) {
      setLike((prev) => !prev);
      setSaved(true);
      await updateDoc(doc(db, "users", `${user?.email}`), {
        savedMovies: arrayUnion({
          id: movie.id,
          title: movie.title,
          poster_path: movie.poster_path,
        }),
      });
    } else {
      alert("Please login to like the movie");
    }
  };

  return (
    <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2">
      <img
        className="w-full h-full block"
        src={`${basePath}${movie?.poster_path}`}
        alt={movie?.name}
      />
      <div className="absolute top-0 left-0 w-full h-full opacity-0 hover:bg-black/80 hover:opacity-100 ">
        <p className="white-space-normal text-sm md:text-lg font-bold flex justify-center items-center h-full text-center">
          {movie?.title}
        </p>
        <p onClick={handleLike}>
          {like ? (
            <FaHeart className="absolute top-4 left-4 text-gray-300" />
          ) : (
            <FaRegHeart className="absolute top-4 left-4 text-gray-300" />
          )}
        </p>
      </div>
    </div>
  );
};

export default Movie;
