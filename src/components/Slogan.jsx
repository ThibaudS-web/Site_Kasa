import React from "react"
import styled from "styled-components"
import sloganBackground from "../assets/slogan_background.png"

const SloganWrapper = styled.div`
  max-width: 100%;
  height: 225px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 43px;
  @media (max-width: 480px) {
    height: 110px;
    border-radius: 10px;
  }
`
// Export here, we need it for About page
export const SloganBG = styled.img`
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
  @media (max-width: 768px) {
    font-size: 36px;
  }
  @media (max-width: 480px) {
    font-size: 24px;
    width: 60%;
    left: 10%;
  }
  @media (max-width: 350px) {
    font-size: 24px;
    width: 71%;
    left: 10%;
  }
`

function Slogan() {
  return (
    <SloganWrapper>
      <SloganBG
        src={sloganBackground}
        alt="slogan, chez vous partout et ailleurs"
      />
      <SloganTitle>Chez vous, partout et ailleurs</SloganTitle>
    </SloganWrapper>
  )
}

export default Slogan
