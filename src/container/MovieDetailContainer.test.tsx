import MovieDetailContainer from "./MovieDetailContainer";
import {render,screen} from "@testing-library/react"
import {testMovie} from "../testfiles/TestMovie"

describe("<MovieDetailContainer/>", () => {
    it("Should render title", async () => {
        render(<MovieDetailContainer movie={testMovie}/>)
        const foundTitle = screen.getByText(testMovie.title)
        expect(foundTitle.textContent).toContain(testMovie.title)
    })
})