import React, { useEffect } from "react";
import { useParams } from "react-router";
const MovieDetails = (props) => {
  const { id } = useParams();
  const {
    backdrop_path,
    genres,
    original_title,
    overview,
    release_date,
    runtime,
    tagline,
    vote_average,
  } = props.movie;
  useEffect(() => {
    props.getMovie(id);
    console.log(props);
  }, []);
  return (
    <div>
      <div className="card">
        <div className="card">
          <img src={backdrop_path} className="card-img-bottom" alt="..." />
        </div>
            <div className="card-body">
                <h5 className="card-title">{original_title}</h5>
                <p className="card-text">{overview}</p>

                <p className="card-text">
                {/* <span class="fs-6"><strong>Tür:</strong></span> {
                genres.length>0?
                genres.map((genre)=><span class="badge rounded-pill bg-success ms-2">{genre.name}</span>)
                :
                <p> tür yok</p>
              } */}
                </p>
                <p className="card-text">
                     <i className="fa-solid fa-clock"></i> <span className="ms-2">{runtime}dk </span>
                </p>
            </div>
          <div className="card-footer text-muted "><span>{release_date}</span></div>
      </div>
    </div>
  );
};

export default MovieDetails;
