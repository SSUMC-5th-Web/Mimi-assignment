import { useLocation, useParams } from 'react-router-dom'

export default function MovieDetail() {
    const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280/";
		//url로 넘겨 받은 title
    const { id } = useParams(); 
    console.log(id);

    const { state } = useLocation();
    console.log(state);

    return (
        <div style={{display: "flex"}} id="page-container">
            <img style={{width: "300px"}} src={IMG_BASE_URL + state.poster_path}/>
            <h1>{state.title}</h1>
            <p>{state.vote_average}</p>
        </div>
    )
}