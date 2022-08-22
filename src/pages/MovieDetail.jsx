import { useParams } from "react-router-dom"
import React, { useEffect, useState } from 'react'
import axios from "axios";

const MovieDetail = () => {
  const {name} = useParams();
  const [movie, setMovie] = useState({})

const getMovie = async () => {
  const raw = await axios.get(
    `https://starwars-server.vercel.app/movies/${name}`
  )
  setMovie(raw.data.data.movie)
}

  useEffect (() => {
    getMovie();
  }, []);

  return (

    <figure className="movie-figure">
      {movie ? (
        <>

      <h2>Este peliculón es {movie.name}</h2>
      </>

  ) : (
    <p>Cargando</p>
  )
}
</figure>
  )
}
export default MovieDetail