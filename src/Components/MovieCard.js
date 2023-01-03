
import MovieList from './MovieList';
import React from 'react'

const MovieCard = ({movie}) => {
return (
    <div style={{display:'flex',flexDirection:'row'}}>
        {movie.length?movie.map(elm=> <MovieList elm={elm}/>):<h2>NOT FOUND</h2>}
        
    </div>
)
}

export default MovieCard
