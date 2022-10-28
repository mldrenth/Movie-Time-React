import http from "./https-common";
import { apikey } from "./apikey";
import ApiRequestResult from "../types/ApiRequestResult"

export const getPopularMovies = () => {
    return http.get<ApiRequestResult>(`movie/popular?api_key=${apikey}&language=en-US&page=1`)
}