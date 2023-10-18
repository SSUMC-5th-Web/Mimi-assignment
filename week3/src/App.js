import { movies } from "./movieDummy";
import Movie from "./Components/Movie";
import { Circle } from "./Components/Circle";

function App() {
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
      <Circle/>
    </div>
  );
}

export default App;



