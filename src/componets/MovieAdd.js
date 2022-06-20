
import React, { useState } from 'react';
import { Form, Modal, Button } from 'react-bootstrap';

function MovieAdd({movies,setMovies} ) {

 const [show, setShow] = useState(false);
 const [newMovie,setNewMovie] = useState({
     name :"",
     posterurl:"",
     description:"",
     rating:"",
 })
const handleAdd =()=>{setMovies([...movies,newMovie]);handleClose()}
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div> <>
    <Button variant="dark" onClick={handleShow}>
      +
    </Button>

    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add Movie</Modal.Title>
      </Modal.Header>
      <Modal.Body>
   
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="Text" placeholder="Enter Movie Name" onChange={(e)=>setNewMovie({...newMovie,name:e.target.value})} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Image url</Form.Label>
        <Form.Control type="Text" placeholder="Enter Movie Image" onChange={(e)=>setNewMovie({...newMovie,posterurl:e.target.value})} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Descreption</Form.Label>
        <Form.Control type="Text" placeholder="Enter Movie Descreption" onChange={(e)=>setNewMovie({...newMovie,description:e.target.value})} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Rating</Form.Label>
        <Form.Control type="Text" placeholder="Enter Movie Rating" onChange={(e)=>setNewMovie({...newMovie,rating:e.target.value})} />
      </Form.Group>
    </Form>
   


</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleAdd}>
          Add Movie
        </Button>
      </Modal.Footer>
    </Modal>
  </></div>
  )
}

export default MovieAdd