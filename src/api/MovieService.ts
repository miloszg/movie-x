import axios from 'axios'
import { MovieDetails } from '../interfaces/MovieDetail'

const apiKey = '9d999cab0ebe803c355be8ea6a8f970d'

axios.defaults.baseURL = 'https://api.themoviedb.org'

const MovieService = {
    getDetails(id: number) {
        return axios.get(`/3/movie/${id}?api_key=${apiKey}`).then((response) => {
            return response.data as MovieDetails
        })
    },
    getSimilarMovies(id: number) {
        return axios.get(`/3/movie/${id}/similar?api_key=${apiKey}`).then((response) => {
            return response.data.results as MovieDetails[]
        })
    },
}

export default MovieService
