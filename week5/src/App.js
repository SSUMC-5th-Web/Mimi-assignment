import { BrowserRouter, Route, Routes } from "react-router-dom";
import Celebirity from "./pages/Celebirity";
import Home from "./pages/Home";
import Movies from "./pages/Movies"
import NotFound from "./pages/NotFound";
import TV from "./pages/TV";
import Header from "./Components/Header";
import MovieDetail from "./pages/MovieDetail";
import Login from "./pages/Login";

function App() {
  return (
    <div className="root-wrap">
      <BrowserRouter>
      {/* 라우팅의 영향을 받지 않는 요소들은 여기 (Routes component 밖에) 작성 */}
      <Header/>
        <Routes>
          {/* path에 들어가는 건 URL에 들어가는 경로 */}
          <Route path="/person" element={<Celebirity/>} />
          <Route path="/" element={<Home/>} />
          <Route path="/movie" element={<Movies/>} />
          <Route path="/*" element={<NotFound/>} />
          <Route path="/tv" element={<TV/>} />
          <Route path="/login" element={<Login/>} />

          <Route path="/movie/:id" element={<MovieDetail/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );  
}

export default App;