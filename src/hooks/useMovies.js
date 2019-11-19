import {useState, useEffect} from 'react';

const END_POINT =
 'https://api.themoviedb.org/3/movie/popular?api_key=6c38dd5edd310b777145e58b0b875fde&language=en-US&page=';

const image_url = 'https://image.tmdb.org/t/p/w200/'; // add movie path at last string

const useMovies = () => {
 const [movies, setMovies] = useState([]);
 const [page2, setPage2] = useState([]);
 const [defaultPage] = useState(1);

 useEffect(() => {
  (async () => {
   const data = await fetch(`${END_POINT}${defaultPage}`);
   const jsonData = await data.json();
   setMovies(jsonData.results);
  })();
 }, []);

 useEffect(() => {
  (async () => {
   const data = await fetch(`${END_POINT}${defaultPage + 1}`);
   const jsonData = await data.json();
   setPage2(jsonData.results);
  })();
 }, []);

 return {movies, page2};
};

export default useMovies;
