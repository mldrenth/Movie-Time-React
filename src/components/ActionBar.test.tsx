import ActionBar from "./ActionBar";
import { render, screen } from "@testing-library/react";

describe("<ActionBar/>", () => {
    it("Should have watchlist button", () => {
        render(<ActionBar />)
        const watchlistButton = screen.getByText("Watchlist")

        expect(watchlistButton).toBeInTheDocument()
    })
    it("Should have like button", () => {
        render(<ActionBar />)
        const likeButton = screen.getByText("Like")
        expect(likeButton).toBeInTheDocument()
    })
    it("Should have rate button", () => {
        render(<ActionBar />)
        const rateButton = screen.getByText("Rate")
        expect(rateButton).toBeInTheDocument()
    })
})