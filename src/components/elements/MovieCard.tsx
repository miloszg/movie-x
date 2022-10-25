import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { MovieDetails } from '../../interfaces/MovieDetail'
import { movieRoute } from '../../utils/routes'
import { getImageLink, getYearFromDate } from '../../utils/utils'

interface Props {
    movie: MovieDetails
}

const Container = styled(Link)`
    all: unset;
    display: grid;
    place-content: center;
    width: 200px;
    height: 320px;
    gap: 10px;
    overflow: hidden;
    cursor: pointer;
    h3,
    h4 {
        text-align: center;
    }
    &:hover {
        box-shadow: rgba(149, 157, 165, 0.7) 0px 2px 8px;
        img {
            transition: all 0.5s ease-in-out;
            transform: scale(1.05);
            overflow: hidden;
        }
    }
`

const MovieCard = ({ movie }: Props) => {
    return (
        <Container to={movieRoute(movie.id)}>
            <img src={getImageLink(movie.poster_path)} alt={`movie ${movie.title} poster`} height={250} width={200} />
            <h3>{movie.title}</h3>
            <h4>{getYearFromDate(movie.release_date)}</h4>
        </Container>
    )
}

export default MovieCard
