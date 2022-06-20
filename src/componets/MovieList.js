import React from 'react';
import MovieAdd from './MovieAdd';
import MovieCard from "./MovieCard";
function MovieList({movies ,setMovies ,text ,rating}) {
  return (

    <div>
      <section style={{marginTop:"20px",marginLeft:"600px"}}>
      <MovieAdd movies={movies} setMovies={setMovies} />
      </section>
    <div style={{marginTop:"150px",display:"flex",justifyContent:"space-around", flexWrap:"wrap"}}>

        {movies.filter((el)=> el.name.toLowerCase().includes(text.toLowerCase()) && el.rating>=rating)
        .map((el)=>( <MovieCard movie={el} />)).reverse()}
    </div>
    </div>
   
  )
}

export default MovieList