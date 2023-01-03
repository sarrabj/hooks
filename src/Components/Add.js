import {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
function TypesExample(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [inputs,setInputs]=useState([
    {title:'',
    description:'',
    posterUrl:'',
    rating:''},
  ])
  
  
  const handleChange=(e)=>{
    setInputs({...inputs,[e.target.name]:e.target.value})
  }
  const handleSave=()=>{
    props.handleAddMovie(inputs)
    setInputs(  {title:'',
    description:'',
    posterUrl:'',
    rating:''},)
    handleClose  () 
  }
  return (
    <>
    <Button variant="primary" onClick={handleShow}>
      Add Movie
    </Button>

    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add Movie</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="put title"
              name="title"
              onChange={handleChange}
              autoFocus
            />
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="exampleForm.ControlTextarea1"
          >
            <Form.Label>Descripton</Form.Label>
            <Form.Control as="textarea" rows={3} name="description" onChange={handleChange}/>
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="exampleForm.ControlTextarea1"
          >
            <Form.Label>Poster Url</Form.Label>
            <Form.Control as="textarea" rows={3} name="posterUrl" onChange={handleChange}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Rating</Form.Label>
            <Form.Control
              type="text"
              placeholder="put rating"
              name="rating"
              onChange={handleChange}
              autoFocus
            />
          </Form.Group>

        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSave}>
        ADD
        </Button>
      </Modal.Footer>
    </Modal>
  </>
      
  
    
  );
}

export default TypesExample;