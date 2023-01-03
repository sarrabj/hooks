import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';

import Navbar from 'react-bootstrap/Navbar';


function NavScrollExample(props) {
return (
    <Navbar bg="light" expand="lg">
    <Container fluid>
        
            
        
        <Form className="d-flex">
            <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            onChange={(e)=>props.handleSearch(e.target.value)}
            />
            <Button variant="outline-success">Search</Button>
        </Form>
        
    </Container>
    </Navbar>
);
}

export default NavScrollExample;