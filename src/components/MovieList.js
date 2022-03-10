import React from "react";
import Movie from "./Movie";
const MovieList = () => {
  let dizi = [1, 2, 3, 4, 5,2,3,4,4,4,4,4,4,4,4,4,44,4,44,4,4,4,4,4,];

  return (
    <div>
      <div className="row">
        {dizi.map(() => {
          return (
            <div className="col-md-4">
              <Movie />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MovieList;
