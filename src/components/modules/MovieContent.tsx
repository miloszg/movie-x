import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import MovieService from '../../api/MovieService'
import { MovieDetails } from '../../interfaces/MovieDetail'
import { getImageLink } from '../../utils/utils'
import MovieBanner from './MovieBanner'
import MovieDetailsComponent from './MovieDetails'
import SimilarMovies from './SimilarMovies'

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

const MovieContent = () => {
    const [movieDetails, setMovieDetails] = useState<MovieDetails>()

    const { pathname } = useLocation()

    useEffect(() => {
        const id = pathname.split('/').pop()

        if (!id) return
        MovieService.getDetails(+id)
            .then((movie) => {
                setMovieDetails(movie)
            })
            .catch((error) => console.log(error))
    }, [pathname])

    if (!movieDetails)
        return <p style={{ height: 500, border: '1px solid red', padding: 200 }}>{`Movie not found for ${pathname}  :/`}</p>

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
                <SimilarMovies movieId={movieDetails.id} />
            </Content>
        </MovieContainer>
    )
}

export default MovieContent
