import { MovieDetails as MovieDetailsInterface } from '../../interfaces/MovieDetail'
import { formatMoney, formatRuntime, getImageLink, getYearFromDate } from '../../utils/utils'
import TreningIcon from '../../assets/trending.svg'
import StarIcon from '../../assets/star.svg'
import styled from 'styled-components'
import theme from '../../utils/theme'
import useToggle from '../../utils/hooks/useToggle'
import { Dialog, DialogContent, DialogTitle } from '@mui/material'

interface Props {
    movieDetails: MovieDetailsInterface
}

const Container = styled.div`
    max-width: 960px;
    display: grid;
    grid-template-columns: auto 1fr;
    background-color: #fff;
    padding: 20px;
    p {
        text-overflow: wrap;
        white-space: wrap;
    }
    .details {
        display: grid;
        grid-template-columns: 1fr;
        gap: 13px;
        place-content: start;
        padding: 0 25px;
        div:first-child {
            border: 1px solid #ccc;
            padding: 3px;
            border-radius: 5px;
            justify-content: center;
        }
        .synopsis::first-line {
            color: ${theme.colors.yellow};
            font-style: italic;
        }

        h3 {
            position: relative;
            &:after {
                content: '';
                border: 1px solid ${theme.colors.yellow};
                position: absolute;
                bottom: -5px;
                left: 0;
                background-color: ${theme.colors.yellow};
                border-radius: 30px;
                height: 2px;
                width: 30px;
            }
        }
        .stats {
            display: flex;
            justify-content: start;
            align-items: center;
            gap: 10px;
            h2 {
                padding-top: 3px;
            }
        }
    }
    @media (max-width: 750px) {
        max-width: 100%;
        display: flex;
        flex-direction: column; //column-reverse;
        justify-content: center;
        align-items: center;
        gap: 15px;
        .stats {
            order: 0;
        }
        // img { ...
        & > img {
            order: 1;
        }
    }
`

const MovieDetails = ({ movieDetails }: Props) => {
    const { poster_path, title, vote_average, popularity, overview, release_date, revenue, runtime } = movieDetails
    const [showDialog, toggleDialog] = useToggle(false)

    return (
        <Container>
            <img src={getImageLink(poster_path)} width={250} height={350} alt={`${title} movie poster`} />
            <div className="details">
                <div className="stats">
                    <img src={StarIcon} alt="star icon" />
                    <h2>{vote_average}</h2>
                    <img src={TreningIcon} alt="trending icon" />
                    <h2>{popularity}</h2>
                    <h2 onClick={toggleDialog} style={{ color: theme.colors.yellow, cursor: 'pointer' }}>
                        Vote now!
                    </h2>
                </div>
                <h3>Description</h3>
                <span className="synopsis">{overview}</span>
                <h3>Release date</h3>
                <p>{getYearFromDate(release_date)}</p>
                <h3>Runtime</h3>
                <p>{formatRuntime(runtime)}</p>
                <h3>Box Office</h3>
                <p>{formatMoney(revenue)}</p>
            </div>
            <Dialog open={showDialog} onClose={toggleDialog}>
                <DialogTitle>{`Lole log in first`}</DialogTitle>
                <DialogContent>
                    <p>{`You need to be logged in to vote! >:|`}</p>
                </DialogContent>
            </Dialog>
        </Container>
    )
}

export default MovieDetails
