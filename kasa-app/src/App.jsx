import React from "react"
import { Routes, Route } from "react-router-dom"
import styled, { createGlobalStyle } from "styled-components"
import Home from "./pages/Home"
import About from "./pages/About"
import Header from "./components/Header"
import fetchLocationData from "./utils/localFetch"
import Error from "./components/Error"
import ProfileLocation from "./pages/ProfilLocation"
import Footer from "./components/Footer"

const GlobalStyle = createGlobalStyle`
    div {
      font-family: "Montserrat", "DM Sans", sans-serif;
      margin: 0;
      margin: auto;
    }
`
const BlocPage = styled.div`
  margin: 40px 100px 0 100px;
  max-width: 1440px;
  margin: auto;
`

function App() {
  return (
    <>
      <GlobalStyle />
      <BlocPage>
        <Header />
        <Routes>
          <Route path="/" element={<Home locations={fetchLocationData} />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/apartment/:locId"
            element={<ProfileLocation locations={fetchLocationData} />}
          />
          <Route path="*" element={<Error />} />
        </Routes>
      </BlocPage>
      <Footer />
    </>
  )
}

export default App
