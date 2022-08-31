import React from "react"
import { Routes, Route } from "react-router-dom"
import styled, { createGlobalStyle } from "styled-components"

import Home from "./pages/Home"
import About from "./pages/About"
import ProfileLocation from "./pages/ProfilLocation"

import Footer from "./components/Footer"
import Header from "./components/Header"
import Error from "./components/Error"

import fetchLocationData from "./services/localFetch"

const GlobalStyle = createGlobalStyle`
    div, p {
      margin: 0;
      margin: auto;
    }
    * {
      font-family: "montserratregular";
    }
`

const BlocPage = styled.div`
  margin: auto;
  max-width: 1440px;
  padding: 20px 100px;
  min-height: 100vh;

  @media (max-width: 768px) {
    padding: 20px 50px;
  }
  @media (max-width: 480px) {
    padding: 0px 10px;
  }
`

function App() {
  const allLocationsData = fetchLocationData.getAll()
  return (
    <>
      <GlobalStyle />
      <BlocPage>
        <Header />
        <Routes>
          <Route path="/" element={<Home locations={allLocationsData} />} />
          <Route path="/about" element={<About />} />
          <Route path="/apartment/:locId" element={<ProfileLocation />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BlocPage>
      <Footer />
    </>
  )
}

export default App
