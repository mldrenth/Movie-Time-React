import MovieResult from "../types/MovieResult"
import MovieItem from "../components/MovieItem"

interface MovieListProps {
    movies: MovieResult[]
}

const MovieList: React.FC<MovieListProps> = ({movies}) => {

    const movieItems = movies.map((movie, index) => {
        return <MovieItem movie={movie} key={index} />
    })

return (
    <>
    {movieItems}
    </>
)

}

export default MovieList

