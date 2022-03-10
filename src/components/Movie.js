import React from "react";

const Movie = (props) => {
  const {
    backdrop_path,
    title,
    overview,
    popularity,
    release_date,
    vote_average,
    vote_count,
  } = props.movie;
  return (
    <div className="mb-3">
      <div className="card ">
        <img src={backdrop_path} className="card-img-top card-img" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{overview.length>70?overview.slice(0,70).concat("..."):(overview)}</p>
          <a href="#" className="btn btn-info ">
            Detail
          </a>
        </div>
        <div className="card-footer text-muted">Yayınlanma tarihi   <strong className="float-end">{release_date}</strong></div>
      </div>
    </div>
  );
};

export default Movie;
