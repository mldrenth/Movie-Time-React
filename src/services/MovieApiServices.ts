import http from "./https-common";
import { apikey } from "./apikey";
import ApiRequestResult from "../types/ApiRequestResult"

export const getPopularMovies = () => {
    return http.get<ApiRequestResult>(`c{apikey}&language=en-US&page=1`)
}