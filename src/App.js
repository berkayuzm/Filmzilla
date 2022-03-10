import "./App.css";
import Nav from "./components/Nav";
import Category from "./components/Category";
import MovieList from "./components/MovieList";
import BackToTop from "./components/BackToTop";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [movies, setMovies] = useState([]);
  const [categoryList, setCategoryList] = useState([]);

  var options = {
    method: "GET",
    url: "https://advanced-movie-search.p.rapidapi.com/search/movie",
    params: { query: "a", page: "1" },
    headers: {
      "x-rapidapi-host": "advanced-movie-search.p.rapidapi.com",
      "x-rapidapi-key": "8fc6e10ab3msha7fe1dbb0240fe1p1cb818jsn6457af1b3b12",
    },
  };
  useEffect(() => {
    setTimeout(()=>{
      axios
      .request(options)
      .then(function (response) {
       
        setMovies(response.data.results.slice(0, 9));
      })
      .catch(function (error) {
        console.error(error);
      });
    },1000)
    
  }, []);

  function fillCategory() {
    var options = {
      method: "GET",
      url: "https://advanced-movie-search.p.rapidapi.com/genre/movie/list",
      headers: {
        "x-rapidapi-host": "advanced-movie-search.p.rapidapi.com",
        "x-rapidapi-key": "8fc6e10ab3msha7fe1dbb0240fe1p1cb818jsn6457af1b3b12",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        let data = response.data.genres;

        setCategoryList(data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }
function listByCategory(category){
  var options = {
    method: 'GET',
    url: 'https://advanced-movie-search.p.rapidapi.com/discover/movie',
    params: {with_genres: category.id, page: '1'},
    headers: {
      'x-rapidapi-host': 'advanced-movie-search.p.rapidapi.com',
      'x-rapidapi-key': '8fc6e10ab3msha7fe1dbb0240fe1p1cb818jsn6457af1b3b12'
    }
  };
  
  axios.request(options).then(function (response) {
    setMovies(response.data.results);
    
    
  }).catch(function (error) {
    console.error(error);
  });
}
  return (
    <div className="App">
      <BackToTop />
      <Nav />
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            {<Category list={fillCategory} categoryList={categoryList} listbyCategory={listByCategory}/>}
          </div>
          <div className="col-md-9 mt-3 content">
            <MovieList movies={movies} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
