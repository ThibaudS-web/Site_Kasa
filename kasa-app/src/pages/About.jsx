import React from "react"
import styled from "styled-components"
import { SloganBG } from "../components/Slogan"
import picturebackground from "../assets/about_background.png"
import Collapse from "../components/Collapse"
import staticTextAbout from "../utils/staticTextAbout"

const AboutBackground = styled(SloganBG)`
  height: 225px;
  margin-bottom: 20px;
`

function About() {
  return (
    <>
      <AboutBackground src={picturebackground} />
      {staticTextAbout.map((collapse) => (
        <Collapse
          pageType="about"
          key={collapse.title}
          label={collapse.title}
          contentType="paragraph"
          contentText={collapse.content}
        />
      ))}
    </>
  )
}

export default About
