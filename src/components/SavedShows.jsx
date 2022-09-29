import React, { useEffect, useState } from "react";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";
import { updateDoc, doc, onSnapshot, getDoc } from "firebase/firestore";
import { AiOutlineClose } from "react-icons/ai";

const BASE_PATH = "https://image.tmdb.org/t/p/w500/";

const SavedShows = () => {
  const [movies, setMovies] = useState([]);
  const { user } = UserAuth();
  const userDoc = doc(db, "users", `${user?.email}`);

  useEffect(() => {
    // this is with real time updates
    /* onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
      console.log("Current data: ", doc.data());
      setMovies(doc.data()?.savedMovies);
    }); */
    const getSavedMovies = async () => {
      const docSnap = await getDoc(userDoc);
      if (docSnap.exists()) {
        setMovies(docSnap.data()?.savedMovies);
      } else {
        console.log("No documents to show!");
      }
    };
    getSavedMovies();
    // }, [user?.email]);
  }, []);

  const handleDelete = async (id) => {
    const filteredMovies = movies.filter((movie) => movie.id !== id);
    try {
      await updateDoc(doc(db, "users", `${user?.email}`), {
        savedMovies: filteredMovies,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className=" flex items-center group py-4">
        <div className="w-full h-full">
          {!movies.length && (
            <p className="text-center text-2xl">No shows saved</p>
          )}
          {!!movies.length &&
            movies.map((movie) => (
              <div
                key={movie.id}
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
                  <p onClick={() => handleDelete(movie.id)}>
                    <AiOutlineClose className="absolute top-4 right-4 text-gray-300 text-3xl" />
                  </p>
                </div>
              </div>
            ))}
        </div>
        {/* <MdChevronRight
          onClick={slideRight}
          size={40}
          className="bg-white rounded-full absolute cursor-pointer z-10 opacity-50 hover:opacity-100 text-black hidden group-hover:block right-0"
        /> */}
      </div>
    </>
  );
};

export default SavedShows;
