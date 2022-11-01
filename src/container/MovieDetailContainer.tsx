import { useState, useEffect } from 'react';
import IMovieResult from "../types/MovieResult"
import MovieSidebar from './MovieSidebar';
import { getVideoKey } from "../services/MovieApiServices"



export interface IMovieDetailContainerProps {
    movie: IMovieResult | undefined
}

const MovieDetailContainer: React.FC<IMovieDetailContainerProps> = ({ movie }) => {
    const [videoKey, setVideoKey] = useState<string>("")

    useEffect(() => {
        getVideoKey(movie?.id).then((response: any) => {
            setVideoKey(response.data.results[0].key)
        }).catch((err: Error) => {
            console.log(err)
        })
    }, [movie])
    return (
        <div className='d-flex flex-column bg-darkblue'>
            {videoKey ? <iframe className='vh-50' src={`https://www.youtube.com/embed/${videoKey}`} title='youtube-video' /> : null}
            <div className='d-flex flex-row p-5 '>
                <MovieSidebar movie={movie} />
                <div className=" px-4 d-flex flex-column">

                    <h1>{movie?.title}</h1>
                    <h3>SYNOPSIS</h3>
                    <p>{movie?.overview}</p>
                </div>
            </div>
        </div>
    )
}

export default MovieDetailContainer