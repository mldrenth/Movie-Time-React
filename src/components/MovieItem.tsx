import MovieResult from "../types/MovieResult"

export interface MovieItemProps {
    movie: MovieResult
}

export const MovieItem: React.FC<MovieItemProps> = ({movie}) => {
    const imagePath: string = "https://image.tmdb.org/t/p/w500/" + movie.poster_path
    return (
        <>
        <img src={imagePath} alt={`moviepicture-${movie.title}`}></img>
        </>
    )
} 

