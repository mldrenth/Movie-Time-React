import MovieResult from "../types/MovieResult"
import styled from "styled-components"



interface MovieItemProps {
    movie: MovieResult
}

 const MovieItem: React.FC<MovieItemProps> = ({movie}) => {
    const imagePath: string = "https://image.tmdb.org/t/p/w500/" + movie.poster_path

    const MovieCard = styled.div `
        height: 10rem;
        width: 5rem;
       
    `

    return (
        <MovieCard className="moviecard" >
        <img className="mw-100" src={imagePath} alt={`moviepicture-${movie.title}`}></img>
        </MovieCard>
    )
} 

export default MovieItem;

