import {useState, useEffect} from 'react';
import MovieResult from "../types/MovieResult"
import { getPopularMovies } from '../services/MovieApiServices';
import MovieList from '../components/MovieList';

const HomeScreenList = () => {
    const [popularMovies, setPopularMovies] = useState<Array<MovieResult>>([])

    useEffect(() => {
     getPopularMovies().then((response: any) => {
        setPopularMovies(response.data.results)
     })
    }, [])


    return (
        <div className='h-50'>
        <MovieList movies={popularMovies} movieListTitle={"Popular Movies"}/>
        </div>
    )
}

export default HomeScreenList