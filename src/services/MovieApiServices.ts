import http from "./https-common";
import { apikey } from "./apikey";
import ApiRequestResult from "../types/ApiRequestResult"

export const getPopularMovies = () => {
    return http.get<ApiRequestResult>(`/movie/popular?api_key=${apikey}&language=en-US&page=1`)
}

export const getUpcomingMovies = () => {
    return http.get<ApiRequestResult>(`/movie/upcoming?api_key=${apikey}&language=en-US&page=1`)
}

export const getMovieById = (id: string | undefined) => {
    return http.get<ApiRequestResult>(`/movie/${id}?api_key=${apikey}&language=en-US`)
}

export const getVideoKey = (id: string | undefined | number) => {
    return http.get<ApiRequestResult>(`/movie/${id}/videos?api_key=${apikey}&language=en-US`)
}