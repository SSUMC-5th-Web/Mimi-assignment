import React from "react";
import Overview from "./Overview";
import { MovieContainer, MoviePoster, MovieInfo } from './Movie.style';

// 함수 괄호 안에 받을 props 넣기
function Movie({poster_path, title, vote_average, overview}) {
    const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280/";
    return (
      <MovieContainer>
        <MoviePoster src={IMG_BASE_URL + poster_path} alt="영화포스터"/>
        <MovieInfo>
            <span id="title">{title}</span>
            <span id="vote_average">{vote_average}</span>
        </MovieInfo>
        <Overview
        title={title}
        overview={overview}/>
      </MovieContainer>
    ) 
  }
  
  export default Movie;

