import React from "react";
import Overview from "./Overview";
import { useNavigate } from 'react-router-dom';

// 함수 괄호 안에 받을 props 넣기
function Movie({poster_path, title, vote_average, overview}) {
    const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280/";
    const navigate = useNavigate();
    const id = title;

    const onClickImg = () => {
      navigate(`/movie/${id}`, {
          state: {
              poster_path,
              title,
              vote_average,
              overview
          }
      });
  };

    return (
      <div className="movie-container">
        <img src={IMG_BASE_URL + poster_path} alt="영화포스터" onClick={onClickImg}/>
        <div className="movie-info">
            <span id="title">{title}</span>
            <span id="vote_average">{vote_average}</span>
        </div>
        <Overview
        title={title}
        overview={overview}/>
      </div>
    ) 
  }
  
  //
  export default Movie;