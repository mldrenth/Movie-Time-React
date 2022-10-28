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

    console.log(popularMovies)

    return (
        <>
        <MovieList movies={popularMovies}/>
        </>
    )
}

export default HomeScreenList