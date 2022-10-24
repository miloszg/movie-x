import styled from "styled-components";

const MovieContainer = styled.section`
  display: grid;
  place-content: center;
  height: 100%;
  padding: 5% 10%;
`;

const Content = styled.div`
  width: 1000px;
  height: 800px;
  background-color: #ddd;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  display: grid;
  grid-template-rows: auto 1fr;
  .banner {
    height: 250px;
  }
  .details {
    background-color: #fff;
  }
`;

const MovieContent = () => {
  return (
    <MovieContainer>
      <Content>
        <div className="banner"></div>
        <div className="details"></div>
      </Content>
    </MovieContainer>
  );
};

export default MovieContent;
