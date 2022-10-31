import IMovieResult from "../types/MovieResult";
import ActionBar from "../components/ActionBar";
import Button from 'react-bootstrap/Button';

export interface IMovieSidebarProps {
    movie: IMovieResult | undefined
}

const MovieSidebar: React.FC<IMovieSidebarProps> = ({movie}) => {
    const imagePath: string = "https://image.tmdb.org/t/p/w500/" + movie?.poster_path


    return (
        <>
        <aside> 
            <img className="rounded-top" height={400} src={imagePath} alt={`poster-${movie?.title}`} />
            <ActionBar/>
        </aside>
        </>
    )
}

export default MovieSidebar