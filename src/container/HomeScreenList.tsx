import {useState, useEffect} from 'react';
import MovieResult from "../types/MovieResult"
import { getPopularMovies, getUpcomingMovies } from '../services/MovieApiServices';
import MovieList from '../components/MovieList';

const HomeScreenList = () => {
    const [popularMovies, setPopularMovies] = useState<Array<MovieResult>>([])
    const [upcomingMovies, setUpcomingMovies] = useState<Array<MovieResult>>([])

    useEffect(() => {
     getPopularMovies().then((response: any) => {
        setPopularMovies(response.data.results)
     })
     getUpcomingMovies().then((response: any) => {
        setUpcomingMovies(response.data.results)
     })
    }, [])


    return (
        <div className='h-50'>
        <MovieList movies={popularMovies} movieListTitle={"Popular Movies"}/>
        <MovieList movies={upcomingMovies} movieListTitle={"Upcoming Movies"}/>
        </div>
    )
}

export default HomeScreenList