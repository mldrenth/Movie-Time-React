import  MovieItem  from "../components/MovieItem"
import { render } from "@testing-library/react"
import IMovieResult from "../types/MovieResult"

const testMovie: IMovieResult = {
    "adult": false,
    "backdrop_path": "/y5Z0WesTjvn59jP6yo459eUsbli.jpg",
    "genre_ids": [
        27,
        53
    ],
    "id": 663712,
    "original_language": "en",
    "original_title": "Terrifier 2",
    "overview": "After being resurrected by a sinister entity, Art the Clown returns to Miles County where he must hunt down and destroy a teenage girl and her younger brother on Halloween night.  As the body count rises, the siblings fight to stay alive while uncovering the true nature of Art's evil intent.",
    "popularity": 5162.285,
    "poster_path": "/yw8NQyvbeNXoZO6v4SEXrgQ27Ll.jpg",
    "release_date": "2022-10-06",
    "title": "Terrifier 2",
    "video": false,
    "vote_average": 7.4,
    "vote_count": 176
}

describe("<MovieItem />", () => {
    it("Should render image", async () => {
        const { getByAltText } = await render(<MovieItem movie={testMovie} />)
        // eslint-disable-next-line testing-library/prefer-screen-queries
        const image = getByAltText('moviepicture-Terrifier 2')
        expect(image).toHaveAttribute('src', "https://image.tmdb.org/t/p/w500//yw8NQyvbeNXoZO6v4SEXrgQ27Ll.jpg")
    })
})