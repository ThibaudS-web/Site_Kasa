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
    bottom: -100%;
    width: 100%;
    height: 100%;
    border-radius: 0.5rem;
    background-color: #000000;
    opacity: 0;
    z-index: 0;
    transition: 350ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
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
  top: 70%;
  left: 20px;
  font-size: 1.2rem;
  width: 85%;
  z-index: 1;
`

function Card({ cover, title, id }) {
  return (
    <Link to={`/apartment/${id}`}>
      <CardWrapper>
        <ImageCover src={cover} alt="Couverture" />
        <CardLabel>{title}</CardLabel>
      </CardWrapper>
    </Link>
  )
}

export default Card
