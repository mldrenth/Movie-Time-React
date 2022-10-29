import MovieResult from "../types/MovieResult"
import styled from "styled-components"
import { Link } from 'react-router-dom';



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
        <Link to={`movies/${movie.id}`}>
        <MovieCard className="moviecard" >
        <img className="mw-100" src={imagePath} alt={`moviepicture-${movie.title}`}></img>
        </MovieCard>
        </Link>
    )
} 

export default MovieItem;

