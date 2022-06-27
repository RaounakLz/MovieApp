import React from 'react';
import { Card } from 'react-bootstrap';
import ReactStars from "react-rating-stars-component";
import {Link} from "react-router-dom";


function MovieCard({movie}) {
  return (
    <div>
      <Link to={`/trailer/${movie.name}`}>
        <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={movie.posterurl} style={{maxHeight:'161px',minHeight:'161px'}} />
  <Card.Body>
    <Card.Title>{movie.name}</Card.Title>
    <Card.Text>
     {movie.description}
    </Card.Text>
  </Card.Body>
  <span style={{margin:"0 auto"}}>
  <ReactStars
    count={5}
    size={24}
    activeColor="#ffd700"
    edit ={false}
    value ={movie.rating}
  />,
  </span>
</Card>
</Link>
    </div>
  )
}

export default MovieCard