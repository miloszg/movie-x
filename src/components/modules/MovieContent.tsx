import { useEffect, useState } from 'react'
import styled from 'styled-components'
import MovieService from '../../api/MovieService'
import { MovieDetails } from '../../interfaces/MovieDetail'
import theme from '../../utils/theme'
import { getImageLink } from '../../utils/utils'
import MovieCard from '../elements/MovieCard'
import MovieBanner from './MovieBanner'
import MovieDetailsComponent from './MovieDetails'

const MovieContainer = styled.section`
    display: grid;
    place-content: center;
    height: 100%;
    padding: 100px 10%;
    z-index: 2;
    animation: backgroundScroll 20s linear infinite;

    @keyframes backgroundScroll {
        from {
            background-position: 0 0;
        }
        to {
            background-position: -400px 0;
        }
    }
`

const Content = styled.div`
    max-width: 1000px;
    height: auto;
    background-color: #fff;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    display: grid;
    grid-template-rows: auto 1fr;
`

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
`

const MovieContent = () => {
    const [movieDetails, setMovieDetails] = useState<MovieDetails>()
    const [similarMovies, setSimilarMovies] = useState<MovieDetails[]>()

    useEffect(() => {
        MovieService.getDetails(550).then((movie) => {
            setMovieDetails(movie)
        })
        MovieService.getSimilarMovies(550).then((movies) => {
            setSimilarMovies(movies.splice(0, 15))
        })
    }, [])

    if (!movieDetails) return <p>Movie not found :/</p>

    return (
        <MovieContainer
            style={{
                backgroundImage: `url(
            ${getImageLink(movieDetails.backdrop_path)}
          )`,
            }}
        >
            <Content>
                <MovieBanner movieDetails={movieDetails} />
            </Content>
            <MovieDetailsComponent movieDetails={movieDetails} />
            <Content>
                <h3 style={{ padding: '10px 25px 0px 25px' }}>Similar Movies</h3>
                <MoviesContainer>
                    {similarMovies?.length ? similarMovies.map((movie) => <MovieCard movie={movie} />) : 'Loading...'}
                </MoviesContainer>
            </Content>
        </MovieContainer>
    )
}

export default MovieContent
