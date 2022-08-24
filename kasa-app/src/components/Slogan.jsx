import React from "react"
import styled from "styled-components"
import SloganBackground from "../assets/slogan_background.png"

const SloganWrapper = styled.div`
  max-width: 100%;
  height: 225px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const SloganBG = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  border-radius: 25px;
  filter: brightness(70%);
`

const SloganTitle = styled.h1`
  position: absolute;
  color: white;
  font-size: 48px;
`

function Slogan() {
  return (
    <SloganWrapper>
      <SloganBG
        src={SloganBackground}
        alt="slogan, chez vous partout et ailleurs"
      />
      <SloganTitle>Chez vous, partout et ailleurs</SloganTitle>
    </SloganWrapper>
  )
}

export default Slogan
