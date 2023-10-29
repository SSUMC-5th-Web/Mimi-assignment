import React from 'react'
import { movies } from '../movieDummy';
import Movie from '../Components/Movie';

export default function Movies() {
  return (
    <div>
      <div className="app-container">
        {
          movies.results.map((item) => {
            // props로 데이터 넘겨주기
            return (
              <Movie
              title={item.title} 
              vote_average={item.vote_average} 
              poster_path={item.poster_path} 
              overview={item.overview}/>
            )
          })
        }
      </div>
    </div>
  );
}
