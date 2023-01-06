import './App.css';
import MovieCard from './Components/MovieCard'
import { useState } from 'react'
import Search from './Components/Search'
import Add from './Components/Add'
import { Rating } from 'react-simple-star-rating';
import { Routes, Route } from 'react-router-dom';
import Description from './Components/Description';

function App() {
  const [filter, setFilter] = useState("")
  const [Rate, setRate] = useState('')


  const [movieCard, setmovieCard] = useState([{
    id:'1',
    title: 'Paws of fury',
    description: 'https://www.youtube.com/embed/BLC82y5Ck34',
    posterUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQdc7L8Kxj4h1itOCRiKmpLkpH8EoeS-ONbQ&usqp=CAU',
    rating: '02',
    
  },

  {id:'2',
    title: 'The Bad Guys',
    description: 'https://www.youtube.com/embed/m8Xt0yXaDPU',
    posterUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQur9UHSiMIcLG34emdRlV8KKx1UC2vrV_17Q&usqp=CAU',
    rating: '03',
    
  }])
  const handleSearch = (val) => {
    setFilter(val)
  }
  const handleAddMovie = (val) => {
    setmovieCard([...movieCard, val])
  }

  const handleRating = (rate) => {
    setRate(rate)
  }
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={
          <>
          
            <div> <Rating onClick={handleRating} /> </div>
            <div><Search handleSearch={handleSearch} /> </div>
            <MovieCard movie={movieCard.filter(elm => elm.title.toUpperCase().includes(filter.toUpperCase()) && elm.rating >= Rate)} />
            <div><Add handleAddMovie={handleAddMovie} /> </div>
          </>
        } />
        <Route path='/description/:prodId' element={<Description prodMovie={movieCard}/>}></Route>
      </Routes>



      



    </div>
  );
}

export default App;
