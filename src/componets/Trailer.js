import React from 'react'
import ReactStars from 'react-rating-stars-component'
import { useParams } from "react-router";

function Trailer({movies}) {

    const params = useParams();
  
    const movie = movies.filter((el) => el.name == params.name)[0];

  return (

    <div> 
        <img src={movie.posterurl}/>
        <h1>{movie.name}</h1>
        <p>{movie.descreption}</p>

        <ReactStars
    count={5}
    size={24}
    activeColor="#ffd700"
    edit ={false} 
    value={movie.rating}
    />

 </div>
  )
}

export default Trailer