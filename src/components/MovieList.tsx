import MovieResult from "../types/MovieResult"
import {MovieItem} from "../components/MovieItem"

export interface MovieListProps {
    movies: MovieResult[]
}

export const MovieList: React.FC<MovieListProps> = ({movies}) => {

    const movieItems = movies.map((movie, index) => {
        return <MovieItem movie={movie} key={index} />
    })

return (
    <>
    {movieItems}
    </>
)

}

