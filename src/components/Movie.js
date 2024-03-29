import React from "react";
import { Link } from "react-router-dom";

const Movie = (props) => {
  const {
    id,
    backdrop_path,
    title,
    overview,
    popularity,
    release_date,
    vote_average,
    vote_count,
  } = props.movie;
  const link=`/details/${id}`
  return (
    <div className="shadow  mb-5 bg-body rounded-3">
      <div className="card">
        <div className="card inside-card">
           <img src={backdrop_path} className="card-img-top card-img" alt="..." />
          
          </div>
          
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{overview.length>70?overview.slice(0,70).concat("..."):(overview)}</p>
          <Link to={link} className="btn btn-info ">
            Detail
          </Link>
          <div className="float-end">
                <span className="badge bg-secondary">
                <i className="fa-regular fa-star star-icon" ></i><span>{vote_average}</span>
            </span>
          </div>
          
        </div>
        <div className="card-footer text-muted">Yayınlanma tarihi   <strong className="float-end">{release_date}</strong></div>
      </div>
    </div>
  );
};

export default Movie;
