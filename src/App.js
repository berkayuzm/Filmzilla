import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav";
import Category from "./components/Category";
import MovieList from "./components/MovieList";


function App() {
  return (
    <div className="App">
      <Nav />
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <Category />
          </div>
          <div className="col-md-9">
            <MovieList/>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
