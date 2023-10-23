import React from "react";
import Movie from "./Movie";
import { useState, useEffect } from "react";
import axios from "axios";
import loading from "../img/loading.gif";
import LoadingCard from "./LoadingCard";
const MovieList = (props) => {
  return (
    <div>
      <div className="row">
        {
        props.loading ? ( 
          <div className="row">
            <div className="col-md-4"><LoadingCard/></div>  
            <div className="col-md-4"><LoadingCard/></div>  
            <div className="col-md-4"><LoadingCard/></div>  
          </div>
            
       
        )
        :(props.movies.map((movie, index) => {
          return (
            <div key={index} className="col-md-4">
              <Movie movie={movie} />
            </div>
          );
        })) }
      </div>
    </div>
  );
};

export default MovieList;
