import React from 'react'
import styled from 'styled-components'
import Footer from './components/Layout/Footer'
import Header from './components/Layout/Header'
import MovieContent from './components/modules/MovieContent'
import { Routes, Route } from 'react-router-dom'
import Homepage from './components/modules/Homepage'

const Container = styled.div`
    background-color: #ccc;
    height: auto;
    margin: 0;
    padding: 0;
`

const Main = styled.main`
    position: relative;
    height: auto;
`

function App() {
    return (
        <Container>
            <Header />
            <Main>
                <Routes>
                    <Route index path="/" element={<Homepage />} />
                    <Route path="/movie/:id" element={<MovieContent />} />
                    <Route path="*" element={<>lole 404</>} />
                </Routes>
            </Main>
            <Footer />
        </Container>
    )
}

export default App
