import {useState, useEffect} from "react";
import IMovieResult from "../types/MovieResult";
import { useParams } from "react-router-dom";
import { getMovieById } from "../services/MovieApiServices";
import MovieDetailContainer from "../container/MovieDetailContainer";

export interface IMoviesPageProps {}

const MoviesPage: React.FC<IMoviesPageProps> = (props) => {
    const [currentMovie, setCurrentMovie] = useState<IMovieResult>()
    const {number} = useParams();

    useEffect(() => {
        getMovieById(number).then((response: any) => {
            setCurrentMovie(response.data)
        })
    },[])

    return (
    <div className="App">
            <header className="App-Header">
            <MovieDetailContainer movie={currentMovie}/>
            </header>
        </div>
    )
}

export default MoviesPage;