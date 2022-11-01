import MovieDetailContainer from "./MovieDetailContainer";
import { render, screen, waitFor } from "@testing-library/react"
import { testMovie } from "../testfiles/TestMovie"


describe("<MovieDetailContainer/>", () => {
    it("Should render title", async () => {
        render(<MovieDetailContainer movie={testMovie} />)
        const foundTitle = screen.getByText(testMovie.title)
        expect(foundTitle.textContent).toContain(testMovie.title)
    })
    it("Should render movie after fetch", async () => {
        render(<MovieDetailContainer movie={testMovie} />)
        let video: HTMLIFrameElement;
        
        await waitFor(async () => {
            video = await screen.findByTitle("youtube-video")
            expect(video).toBeInTheDocument()}, {timeout: 10000})
    })
})