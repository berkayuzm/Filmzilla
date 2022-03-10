import React from "react";
import Movie from "./Movie";
import { useState,useEffect } from "react";
import axios from 'axios'
import loading from "../img/loading.gif"
const MovieList = (props) => {

  return (
    <div>
       <div className="row">
        {props.movies.length>0?
         props.movies.map((movie,index) => {
         return(
         <div key={index} className="col-md-4">
            <Movie movie={movie} />
          </div>)
        })
        :
        <img src={loading} className="loading-img mx-auto" alt="" />
      } 
      </div> 
    </div>
  );
};

export default MovieList;
