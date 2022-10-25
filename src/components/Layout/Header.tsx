import styled from 'styled-components'
import MovieIcon from '../../assets/movie.svg'
import theme from '../../utils/theme'

const Header = styled.header`
    width: 100%;
    height: 20px;
    background-color: black;
    display: flex;
    padding: 15px 0;
    justify-content: center;
    position: fixed;
    z-index: 3;
    img {
        fill: ${theme.colors.yellow};
        z-index: 5;
    }
    p {
        text-indent: 10px;
        text-align: center;
        font-family: 'Roboto Condensed';
        margin: 0;
        font-size: 25px;
        line-height: 20px;
        font-weight: 600;
        letter-spacing: 1px;
        color: ${theme.colors.white};
    }
`

export default function HeaderComponent() {
    return (
        <Header>
            <img src={MovieIcon} alt="movie-x logo" />
            <p>Movie X</p>
        </Header>
    )
}
