/* eslint-disable react/prop-types */
import React, { useState } from "react"
import styled from "styled-components"
import { useParams } from "react-router-dom"
import Arrow from "../assets/arrow_collapse.png"

const SliderWrapper = styled.div`
  width: 100%;
  height: 415px;
  position: relative;
  display: flex;
`

const CurrentPicture = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 1.5rem;
`
const LeftArrow = styled.img`
  width: 80px;
  height: 46px;
  transform: rotate(270deg) translateY(-50%);
  position: absolute;
  top: 50%;
  left: 25px;
  cursor: pointer;
  &:hover {
    width: calc(80px * 1.2);
    height: calc(46px * 1.2);
  }
`
const RightArrow = styled.img`
  width: 80px;
  height: 46px;
  transform: rotate(90deg) translateY(-50%);
  position: absolute;
  top: 50%;
  right: 25px;
  cursor: pointer;
  &:hover {
    width: calc(80px * 1.2);
    height: calc(46px * 1.2);
  }
`

function ProfileLocation({ locations }) {
  const { locId } = useParams()
  const allLocations = locations.get()
  const locationProfil = allLocations.filter((loc) => loc.id === locId)[0]
  const [currentPictureIndex, updateCurrentPicture] = useState(0)

  function handleRightArrow() {
    if (locationProfil.pictures[currentPictureIndex + 1]) {
      updateCurrentPicture(currentPictureIndex + 1)
    } else {
      updateCurrentPicture(0)
    }
  }

  function handleLeftArrow() {
    if (locationProfil.pictures[currentPictureIndex - 1]) {
      updateCurrentPicture(currentPictureIndex - 1)
    } else {
      updateCurrentPicture(locationProfil.pictures.length - 1)
    }
  }

  return (
    <SliderWrapper>
      <CurrentPicture src={locationProfil.pictures[currentPictureIndex]} />
      <LeftArrow
        onClick={() => {
          handleLeftArrow()
        }}
        src={Arrow}
      />
      <RightArrow
        onClick={() => {
          handleRightArrow()
        }}
        src={Arrow}
      />
    </SliderWrapper>
  )
}

export default ProfileLocation
