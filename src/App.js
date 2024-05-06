
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import './App.css';
import Movie from './components/Movie';
import MovieHeading from './components/movieheading'; // Correct import
import Searchbox from './components/searchbox';
// Correct import
import Favorites from './components/Favorite';
function App() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");
const [Favorite, setFavorite] = useState([]);//issue

  const getMovies = async () => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=c2a731da`;

    try { 
      const response = await fetch(url);
      const responseJson = await response.json(); 
    

      if (responseJson.Search) {
        setMovies(responseJson.Search);
      } else {
        console.error("No movies found."); 
      }
    } catch (error) {
      console.error("Error fetching movies:", error); 
    }
  };

  useEffect(() => {
    getMovies(searchValue);}, [searchValue]);

useEffect(() => { //use this effect from local storage to get the favorite movies
  const movieFavorites = JSON.parse(
    localStorage.getItem('react-movie-app-favorites')
  );
  setFavorite(movieFavorites);
}, []);


const saveToLocalStorage = (items) => { // save item to local storage
  localStorage.setItem('react-movie-app-favorites', JSON.stringify(items));
}

const addfavmovies = (movie) => {
  const newFavlist = [...Favorite, movie];
  setFavorite(newFavlist); 
  saveToLocalStorage(newFavlist);
};

const removefavmovies = (movie) => {

const newFavlist = Favorite.filter(
  (Favorite) => Favorite.imdbID !== movie.imdbID
);
setFavorite(newFavlist);
saveToLocalStorage(newFavlist);
};




  return (
    <div className='container-fluid movie-app'> 
      <div className='row align-items-center justify-content-between mt-4 mb-4'>
        <div className="col">
          <MovieHeading heading='Movies' />
        </div>
        <div className="col-auto">
          <Searchbox searchValue={searchValue} setSearchValue={setSearchValue} />
        </div>
      </div>

      <div className='row'>  
        <Movie movies={movies} handlefavclick={addfavmovies} Favorite={Favorites}/>   
      </div>


      <div className='row align-items-center justify-content-between mt-4 mb-4'>
        <div className="col">
          <MovieHeading heading='Favorites' />
        </div>
        
        <div className='row'>  
        <Movie movies={Favorite} handlefavclick={removefavmovies} 
        Favorite={Favorites}/>   
      </div>

    
         
</div>


    </div>
  );
}

export default App;
