import MovieList from "./MovieList";
import { render, screen } from "@testing-library/react";
import IMovieResult from "../types/MovieResult";

const testMovies: IMovieResult[] = [
    {
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
        },
        {
        "adult": false,
        "backdrop_path": "/bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg",
        "genre_ids": [
        28,
        878,
        14
        ],
        "id": 436270,
        "original_language": "en",
        "original_title": "Black Adam",
        "overview": "Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods—and imprisoned just as quickly—Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.",
        "popularity": 3835.264,
        "poster_path": "/3zXceNTtyj5FLjwQXuPvLYK5YYL.jpg",
        "release_date": "2022-10-19",
        "title": "Black Adam",
        "video": false,
        "vote_average": 7.1,
        "vote_count": 580
        },
        {
        "adult": false,
        "backdrop_path": "/tIX6j3NzadlwGcJ52nuWdmtOQkg.jpg",
        "genre_ids": [
        27,
        53,
        9648
        ],
        "id": 717728,
        "original_language": "en",
        "original_title": "Jeepers Creepers: Reborn",
        "overview": "Forced to travel with her boyfriend to a horror festival, Laine begins to experience disturbing visions associated with the urban legend of The Creeper. As the festival arrives and the blood-soaked entertainment builds to a frenzy, she becomes the center of it while something unearthly has been summoned.",
        "popularity": 2504.094,
        "poster_path": "/aGBuiirBIQ7o64FmJxO53eYDuro.jpg",
        "release_date": "2022-09-15",
        "title": "Jeepers Creepers: Reborn",
        "video": false,
        "vote_average": 5.8,
        "vote_count": 378
        }
]

describe("<MovieList />", () => {
    it("Should have three movie items", async () => {
        render(<MovieList movies={testMovies}/>)
        expect(screen.getAllByRole("img").length).toBe(3)
    })
})