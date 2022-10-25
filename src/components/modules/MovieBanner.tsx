import styled from 'styled-components'
import { MovieDetails } from '../../interfaces/MovieDetail'
import { getImageLink } from '../../utils/utils'

const Container = styled.div`
    height: 300px;
    width: 100%;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: end;
    position: relative;
    h1 {
        position: absolute;
        bottom: 70px;
        left: 30px;
        color: #fff;
        z-index: 1;
    }
    h2 {
        position: absolute;
        bottom: 20px;
        left: 30px;
        color: #d4ad17;
        z-index: 2;
    }
    //tutaj mozna uproscic
    &:after {
        position: relative;
        content: '';
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
        background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 100%);
    }
`

interface Props {
    movieDetails: MovieDetails
}

const MovieBanner = ({ movieDetails }: Props) => {
    const { backdrop_path, tagline, title } = movieDetails

    return (
        <Container
            style={{
                backgroundImage: `url(
                    ${getImageLink(backdrop_path)}
                )`,
            }}
        >
            <h1>{title}</h1>
            <h2>{tagline}</h2>
        </Container>
    )
}

export default MovieBanner
