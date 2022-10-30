import { useState, useEffect } from 'react';
import IMovieResult from "../types/MovieResult"
import { getVideoKey } from "../services/MovieApiServices"


export interface IMovieDetailContainerProps {
    movie: IMovieResult | undefined
}

const MovieDetailContainer: React.FC<IMovieDetailContainerProps> = ({ movie }) => {
    const [videoKey, setVideoKey] = useState<string>("")

    useEffect(() => {
        getVideoKey(movie?.id).then((response: any) => {
            setVideoKey(response.data.results[0].key)
        })
    }, [movie])
    return (
        <div className=" px-4 d-flex flex-column">
            {videoKey ? <iframe className='vh-50' src={`https://www.youtube.com/embed/${videoKey}`} title='youtub-video' /> : null}
            <h1>{movie?.title}</h1>
            <h3>SYNOPSIS</h3>
            <p>{movie?.overview}</p>
        </div>
    )
}

export default MovieDetailContainer