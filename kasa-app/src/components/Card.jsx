/* eslint-disable react/prop-types */
import React from "react"
import styled from "styled-components"

const CardWrapper = styled.div`
  max-width: 340px;
  height: 340px;
  display: flex;
  position: relative;
`
const ImageCover = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0.5rem;
`

const CardLabel = styled.h2`
  color: white;
  position: absolute;
  bottom: 20px;
  left: 20px;
  font-size: 1.2rem;
`

function Card({ cover, title }) {
  return (
    <CardWrapper>
      <ImageCover src={cover} alt="Couverture" />
      <CardLabel>{title}</CardLabel>
    </CardWrapper>
  )
}

export default Card
