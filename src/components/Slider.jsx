/* eslint-disable react/prop-types */
import React, { useState } from "react"
import styled from "styled-components"
import Arrow from "./ui/Arrow"

const SliderWrapper = styled.div`
  width: 100%;
  height: 415px;
  position: relative;
  display: flex;
  margin-bottom: 30px;
  ::after {
    content: "";
    position: absolute;
    height: 0px;
    width: 100%;
    bottom: 0;
    left: 0;
    background-color: #000;
    border-radius: 0 0 1.5rem 1.5rem;
    opacity: 0;
    transition: 350ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }
  &:hover::after {
    @media (min-width: 480px) {
      height: 60px;
      opacity: 0.7;
    }
  }
  @media (max-width: 480px) {
    height: 255px;
    margin-bottom: 15px;
  }
`
const CurrentPicture = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 1.5rem;
`
const genericArrowCss = `
    position: absolute;
    width: 80px;
    height: 80px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    @media (max-width: 768px) {
      width: 40px;
      height: 40px;
    }
    @media (max-width: 480px) {
      width: 20px;
      height: 20px;
    }
`
const LeftArrow = styled(Arrow)`
  ${genericArrowCss}
  filter: drop-shadow(-2px -2px 3px #222);
  transform: rotate(180deg);
  top: 50%;
  left: 25px;
  &:hover {
    transform: rotate(180deg) scale(1.1);
  }
`
const RightArrow = styled(Arrow)`
  ${genericArrowCss}
  filter: drop-shadow(2px 2px 3px #222);
  transform: rotate(0deg);
  top: 50%;
  right: 25px;
  &:hover {
    transform: rotate(0deg) scale(1.1);
  }
`
const PictureCount = styled.div`
  position: absolute;
  color: white;
  left: 50%;
  bottom: 4%;
  font-size: 20px;
  z-index: 1;
  @media (max-width: 480px) {
    display: none;
  }
`

function Slider({ pictures }) {
  const [currentPictureIndex, updateCurrentPicture] = useState(0)

  function handleRightArrow() {
    if (pictures[currentPictureIndex + 1]) {
      updateCurrentPicture(currentPictureIndex + 1)
    } else {
      updateCurrentPicture(0)
    }
  }

  function handleLeftArrow() {
    if (pictures[currentPictureIndex - 1]) {
      updateCurrentPicture(currentPictureIndex - 1)
    } else {
      updateCurrentPicture(pictures.length - 1)
    }
  }

  return (
    <SliderWrapper>
      <CurrentPicture src={pictures[currentPictureIndex]} />
      <PictureCount>{`${currentPictureIndex + 1}/${
        pictures.length
      }`}</PictureCount>
      <LeftArrow
        style={{ display: pictures.length === 1 ? "none" : "block" }}
        onClick={() => {
          handleLeftArrow()
        }}
      />
      <RightArrow
        value=""
        style={{ display: pictures.length === 1 ? "none" : "block" }}
        onClick={() => {
          handleRightArrow()
        }}
      />
    </SliderWrapper>
  )
}

export default Slider
