
import Card from 'react-bootstrap/Card';

import Rating from './Rating'
function BasicExample({elm}) {
return (
    <Card.Body >
    <Card style={{ width: '20rem' ,margin:'8px',alignItems:'center'}}>
    
    <h5 style={{color:'blueviolet'}}> Titre: {elm.title}</h5>
    <h5 >  Descriptipn: {elm.description}</h5>
    <img src= {elm.posterUrl} style={{width:'180px'}} />
    
    <Rating elm={elm}/>

    </Card>
    </Card.Body>
);
}

export default BasicExample;