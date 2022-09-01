import React from "react"
import { Routes, Route } from "react-router-dom"
import styled, { createGlobalStyle } from "styled-components"

import Home from "./pages/Home"
import About from "./pages/About"
import ProfileLocation from "./pages/ProfilLocation"

import Footer from "./components/Footer"
import Header from "./components/Header"
import Error404 from "./components/error/Error404"
import ErrorAPI from "./components/error/ErrorAPI"

import { FetchDataProvider } from "./utils/context/FetchDataProvider"

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
  return (
    <>
      <GlobalStyle />
      <BlocPage>
        <Header />
        <FetchDataProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/apartment/:locId" element={<ProfileLocation />} />
            <Route path="/api-error" element={<ErrorAPI />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </FetchDataProvider>
      </BlocPage>
      <Footer />
    </>
  )
}

export default App
