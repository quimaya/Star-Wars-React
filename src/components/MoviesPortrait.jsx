import React from 'react'
import "./MoviesPortrait.css"
import { Link } from 'react-router-dom'

const MoviesPortrait = ({movie}) => {
  return (

    <Link to ={`/movies/${movie.name}`}>

        <figure className="movie-Portrait">

        <img src={movie.poster} alt={movie.name} referrerPolicy="no-referrer" />

        <figcaption>{movie.name}</figcaption>
        </figure>
        </Link>
  )
}

export default MoviesPortrait