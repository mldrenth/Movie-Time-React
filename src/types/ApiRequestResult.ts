import IMovieResult from "./MovieResult"

export default interface IApiRequestResult {
    page: number,
    results: IMovieResult[],
    total_pages: number,
    total_results: number
}