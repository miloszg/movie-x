import { useEffect, useState } from "react";
import styled from "styled-components";
import MovieService from "../../api/MovieService";
import { MovieDetails } from "../../interfaces/MovieDetail";

const MovieContainer = styled.section`
  display: grid;
  place-content: center;
  height: 100%;
  padding: 100px 10%;
`;

const Content = styled.div`
  width: 1000px;
  height: 800px;
  background-color: #ddd;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  display: grid;
  grid-template-rows: auto 1fr;
  .banner {
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
    &:after {
      position: relative;
      content: "";
      height: 100%;
      width: 100%;
      top: 0;
      left: 0;
      background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 0.5) 100%
      );
    }
  }
  .movie {
    display: grid;
    grid-template-columns: auto 1fr;
    background-color: #fff;
    padding: 20px;
  }
  .details {
    display: grid;
    grid-template-columns: 1fr;
    gap: 10px;
    place-content: start;
    padding: 0 25px;
  }
`;

const MovieContent = () => {
  const [movieDetails, setMovieDetails] = useState<MovieDetails>();

  useEffect(() => {
    MovieService.getDetails(550).then((movie) => {
      setMovieDetails(movie);
    });
  }, []);

  if (!movieDetails) return <p>Movie not found :/</p>;

  console.log(`url(
    "https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}"
  )`);
  return (
    <MovieContainer>
      <Content>
        <div
          className="banner"
          style={{
            backgroundImage: `url(
              "https://image.tmdb.org/t/p/original/${movieDetails.backdrop_path}"
            )`,
          }}
        >
          <h1>{movieDetails?.title}</h1>
          <h2>{movieDetails?.tagline}</h2>
        </div>
        <div className="movie">
          <img
            src={`https://image.tmdb.org/t/p/original/${movieDetails.poster_path}`}
            width={250}
            height={350}
            alt={`${movieDetails.title} movie poster`}
          />
          <div className="details">
            <h3>Description</h3>
            <p>{movieDetails?.overview}</p>
            <h3>Release date</h3>
            <p>{movieDetails?.release_date}</p>
            <h3>Runtime</h3>
            <p>{movieDetails?.runtime}</p>
            <h3>Box Office</h3>
            <p>{movieDetails?.revenue}</p>
          </div>
          <p>similar movies</p>
        </div>
      </Content>
    </MovieContainer>
  );
};

export default MovieContent;
