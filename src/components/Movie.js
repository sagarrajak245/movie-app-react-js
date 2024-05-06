import React from 'react';

function Movie(props) {
const Favorite=props.Favorite;
const removefav=props.removefav;
if(!props.movies){
    return null;
}



  return (
    <div className='movie-container'>
      {props.movies.map((movie, index) => (
        <div className='image-container d-flex justify-content-start m-3' key={index}>
          
          <img src={movie.Poster} alt={movie.Title} />
          <div 
          onClick={() =>props.handlefavclick(movie)   }
          className='overlay d-flex align-items-center justify-content-center'
          >
            <Favorite/>  
            <removefav/> 

          </div>
         
        </div>  
      ))}
    </div>
  );
}

export default Movie;
