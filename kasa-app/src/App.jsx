import React from "react"
import { Routes, Route } from "react-router-dom"
import styled, { createGlobalStyle } from "styled-components"
import Home from "./pages/Home"
import About from "./pages/About"
import Header from "./components/Header"
import fetchLocationData from "./utils/localFetch"

const GlobalStyle = createGlobalStyle`
    div {
      font-family: "Montserrat", "DM Sans", sans-serif;
      margin: 0;
      max-width: 1440px;
      margin: auto;
    }
`
const BlocPage = styled.div`
  margin: 40px 100px 0 100px;
`

function App() {
  return (
    <>
      <GlobalStyle />
      <BlocPage>
        <Header />
        <Routes>
          <Route path="/" element={<Home location={fetchLocationData} />} />
          <Route path="/about" element={<About />} />
          <Route path="/apartment/:id" />
        </Routes>
      </BlocPage>
    </>
  )
}

export default App
