/* eslint-disable react/prop-types */
import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"

const CardWrapper = styled.div`
  max-width: 340px;
  height: 340px;
  display: flex;
  overflow: hidden;
  position: relative;
  ::after {
    content: "";
    position: absolute;
    bottom: -30%;
    width: 100%;
    height: 30%;
    border-bottom-left-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
    background-color: #000000;
    opacity: 0;
    z-index: 0;
    transition: 400ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }
  &:hover::after {
    transform: translateY(-100%);
    opacity: 0.6;
  }
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
  width: 80%;
  z-index: 1;
`

function Card({ cover, title, id }) {
  return (
    <CardWrapper>
      <Link to={`/apartment/${id}`}>
        <ImageCover src={cover} alt="Couverture" />
        <CardLabel>{title}</CardLabel>
      </Link>
    </CardWrapper>
  )
}

export default Card
