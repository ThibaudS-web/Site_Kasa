import React from "react"
import styled from "styled-components"
import { SloganBG } from "../components/Slogan"
import picturebackground from "../assets/about_background.png"
import Collapse from "../components/Collapse"

const AboutBackground = styled(SloganBG)`
  height: 225px;
  margin-bottom: 20px;
`

function About() {
  return (
    <>
      <AboutBackground src={picturebackground} />
      <Collapse label="Fiabilité" />
      {/* <Collapse label="Respect" />
      <Collapse label="Service" />
      <Collapse label="Sécurité" /> */}
    </>
  )
}

export default About
