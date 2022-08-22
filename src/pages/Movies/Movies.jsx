import React, {useState, useEffect} from 'react'
import axios from 'axios';
import "./Movies.css"
import MoviesPortrait from '../../components/MoviesPortrait';

const Movies = () => {
  const [moviesList, setMoviesList] = useState ([]);

  const getMovies = async () => {
    const rawData = await axios.get("https://starwars-server.vercel.app/movies");

    setMoviesList(rawData.data.data.movies)
  };

useEffect (() => {
  getMovies();
}, [] )

  return (
    <section className="movies">
      <h2>Movies</h2>
      <div className="gallery">
      {moviesList.length > 0 ? moviesList.map((movie) => (

      <MoviesPortrait movie={movie} key={movie._id}/>)) : 
      <p>Cargando Peliculas</p>
      }
</div>
    </section>
  )
}

export default Movies