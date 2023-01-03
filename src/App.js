import './App.css';
import MovieCard from './Components/MovieCard'
import {useState} from 'react'
import Search from './Components/Search'
import Add from './Components/Add'
import { Rating } from 'react-simple-star-rating';

function App() {
  const[filter,setFilter]=useState("")
  const[Rate,setRate]=useState('')


  const [movieCard, setmovieCard] = useState([{
    title:'Paws of fury',
    description:'A hard-on-his-luck hound Hank (Michael Cera) finds himself in a town full of cats who need a hero to defend them from a ruthless villain',
    posterUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQdc7L8Kxj4h1itOCRiKmpLkpH8EoeS-ONbQ&usqp=CAU',
    rating:'02'},
    
      {title:'The Bad Guys',
      description:'Based on the kids graphic novel series by Aaron Blabey, “The Bad Guys” follows a group of fun-loving criminals who lean into their rap as the villains of the animal kingdom for thrills and profit.',
      posterUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQur9UHSiMIcLG34emdRlV8KKx1UC2vrV_17Q&usqp=CAU',
      rating:'03'
    }])
  const handleSearch=(val)=>{
    setFilter(val)
  }
  const handleAddMovie=(val)=>{
    setmovieCard([...movieCard,val])
  }

  const handleRating = (rate) => {
    setRate(rate)
  }
  return (
    <div className="App">
      
      
    
        <div> <Rating onClick={handleRating}/> </div>
      
        <div><Search handleSearch={handleSearch}/> </div>
        
        <div><MovieCard  movie={movieCard.filter(elm=>elm.title.toUpperCase().includes(filter.toUpperCase())&& elm.rating >= Rate)} /> </div>
        
          <div><Add handleAddMovie={handleAddMovie}/> </div>

      
    </div>
  );
}

export default App;
