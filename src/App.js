import "./App.css";
import Nav from "./components/Nav";
import Category from "./components/Category";
import MovieList from "./components/MovieList";
import BackToTop from "./components/BackToTop";
import { useState, useEffect } from "react";
import axios from "axios";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./globalStyles";
import GlobalStyle from "./globalStyles";
import {BrowserRouter,Route,Routes } from "react-router-dom"
import MovieDetails from "./components/MovieDetails";
function App() {
  const [movies, setMovies] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const [themeMode ,setThemeMode]=useState("light");
  const [movie,setMovie]=useState({})
  
  
  function changeMode(){
    if(themeMode==="light"){
      setThemeMode("dark")
    }
    else{
      setThemeMode("light")
    }
  }


  
  useEffect(() => {
   //FOR TESTİNG
    // let data=[];
    // for (let index = 0; index < 19; index++) {
    //   data.push(JSON.parse( localStorage.getItem(index)))
      
    // }
    
    // console.log(data)
    // setTimeout(() => {
      
    //   setMovies(data)
    // }, 1000);
    
    var options = {
      method: "GET",
      url: "https://advanced-movie-search.p.rapidapi.com/search/movie",
      params: { query: "a", page: "1" },
      headers: {
        "x-rapidapi-host": "advanced-movie-search.p.rapidapi.com",
        "x-rapidapi-key": "8fc6e10ab3msha7fe1dbb0240fe1p1cb818jsn6457af1b3b12",
      },
    };
   
      axios
        .request(options)
        .then(function (response) {
          console.log(response);
          setMovies(response.data.results);
         
        })
        .catch(function (error) {
          console.error(error);
        });
  
  }, []);

  function searchMovie(event){
    event.preventDefault()
    
    var key=event.target.elements.key.value
    var options = {
      method: "GET",
      url: "https://advanced-movie-search.p.rapidapi.com/search/movie",
      params: { query: key, page: "1" },
      headers: {
        "x-rapidapi-host": "advanced-movie-search.p.rapidapi.com",
        "x-rapidapi-key": "8fc6e10ab3msha7fe1dbb0240fe1p1cb818jsn6457af1b3b12",
      },
    };
    axios
        .request(options)
        .then(function (response) {
          console.log(response);
          setMovies(response.data.results);
          event.target.elements.key.value="";
         
        })
        .catch(function (error) {
          console.error(error);
        });
  }

  function fillCategory() {
    var options = {
      method: "GET",
      url: "https://advanced-movie-search.p.rapidapi.com/genre/movie/list",
      headers: {
        "x-rapidapi-host": "advanced-movie-search.p.rapidapi.com",
        "x-rapidapi-key": "8fc6e10ab3msha7fe1dbb0240fe1p1cb818jsn6457af1b3b12",
      },
    };
    //FOR TESTİNG
    // let data=[];
    // for (let index = 100; index < 119; index++) {
    //   data.push(JSON.parse(localStorage.getItem(index)))
    //setCategoryList(data)
      
    
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
  function getMovie(id){
    var options = {
      method: 'GET',
      url: 'https://advanced-movie-search.p.rapidapi.com/movies/getdetails',
      params: {movie_id: id},
      headers: {
        'x-rapidapi-host': 'advanced-movie-search.p.rapidapi.com',
        'x-rapidapi-key': '8fc6e10ab3msha7fe1dbb0240fe1p1cb818jsn6457af1b3b12'
      }
    };
    setTimeout(() => {
      
      axios.request(options).then(function (response) {
        console.log(response.data)
        setMovie(response.data)
      }).catch(function (error) {
        console.error(error);
      });
    }, 500);
  }
  function listByCategory(category) {
    var options = {
      method: "GET",
      url: "https://advanced-movie-search.p.rapidapi.com/discover/movie",
      params: { with_genres: category.id, page: "1" },
      headers: {
        "x-rapidapi-host": "advanced-movie-search.p.rapidapi.com",
        "x-rapidapi-key": "8fc6e10ab3msha7fe1dbb0240fe1p1cb818jsn6457af1b3b12",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setMovies(response.data.results);
      })
      .catch(function (error) {
        console.error(error);
      });
  }
  return (
    <BrowserRouter>
      <ThemeProvider theme={themeMode==="light"?lightTheme:darkTheme}>
          <GlobalStyle />
          <BackToTop />
          <Nav changeMode={changeMode} search={searchMovie} themeMode={themeMode}/>
          <div className="container">
            <div className="row category-row">
              <div className="col-sm-3 ">
                {
                  <Category
                    list={fillCategory}
                    categoryList={categoryList}
                    listbyCategory={listByCategory}
                  />
                }
              </div>
              <div className="col-md-9 mt-3 content">
                <Routes>
                  <Route path="/" element={<MovieList movies={movies}/>} />
                  <Route path="/details/:id" element={<MovieDetails movie={movie} getMovie={getMovie}/>} />
                </Routes>
              </div>
            </div>
          </div>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
