import { useEffect, useState } from 'react'
import styled from 'styled-components'
import MovieService from '../../api/MovieService'
import { MovieDetails } from '../../interfaces/MovieDetail'
import theme from '../../utils/theme'
import MovieCard from '../elements/MovieCard'

const MoviesContainer = styled.div`
    /* display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
gap: 0px; */

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 15px;

    background-color: ${theme.colors.white};
    padding: 25px;
    @media (max-width: 750px) {
        display: flex;
        justify-content: center;
        place-content: center;
    }
`

interface Props {
    movieId: MovieDetails['id']
}

const SimilarMovies = ({ movieId }: Props) => {
    const [similarMovies, setSimilarMovies] = useState<MovieDetails[]>()

    useEffect(() => {
        MovieService.getSimilarMovies(movieId)
            .then((movies) => {
                setSimilarMovies(movies.splice(0, 15))
            })
            .catch((error) => console.log(error))
    }, [movieId])

    return (
        <>
            <h3 style={{ padding: '10px 25px 0px 25px' }}>Similar Movies</h3>
            <MoviesContainer>
                {similarMovies?.length
                    ? similarMovies.map((movie) => <MovieCard movie={movie} key={movie.id} />)
                    : 'Loading...'}
            </MoviesContainer>
        </>
    )
}

export default SimilarMovies
