import MovieResult from "../types/MovieResult"
import MovieItem from "../components/MovieItem"
import styled from "styled-components"

interface MovieListProps {
    movies: MovieResult[],
    movieListTitle: string

}
const MovielistTitle = styled.h1`
text-align: left;
font-size: 2rem;
`

const MovieList: React.FC<MovieListProps> = ({ movies, movieListTitle }) => {

    const movieItems = movies.map((movie, index) => {
        return <MovieItem movie={movie} key={index} />
    })

    return (
        <>
            <MovielistTitle>{movieListTitle}</MovielistTitle>
            <div className=" d-flex flex-row flex-wrap ">
                {movieItems}
            </div>

        </>
    )

}

export default MovieList

