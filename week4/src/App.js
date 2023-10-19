import { movies } from "./movieDummy";
import Movie from "./Components/Movie";
import { AppContainer } from "./Components/Movie.style";

function App() {
  return (
    <div>
      <AppContainer>
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
      </AppContainer>
    </div>
  );
}

export default App;



