import React from "react";
import styled from "styled-components";
import Footer from "./components/Layout/Footer";
import Header from "./components/Layout/Header";
import "./App.css";
import MovieContent from "./components/modules/MovieContent";

const Container = styled.div`
  background-color: #eee;
  height: 100%;
  margin: 0;
  padding: 0;
`;

const Main = styled.main``;

function App() {
  return (
    <Container>
      <Header />
      <Main>
        <MovieContent />
      </Main>
      <Footer />
    </Container>
  );
}

export default App;
