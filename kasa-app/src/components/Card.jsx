/* eslint-disable react/prop-types */
import React from "react"
import styled, { css, keyframes } from "styled-components"
import { Link } from "react-router-dom"

const cardAnimation = keyframes`
    0% {
      transform: translateY(-40px);
      opacity: 0;
      
    }
    100% {
      transform: translateY(0px);
      opacity: 1;
    }
`
const CardWrapper = styled.div`
  max-width: 340px;
  height: 340px;
  display: flex;
  overflow: hidden;
  position: relative;
  animation-name: ${cardAnimation};
  animation-duration: 0.5s;
  transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
  animation-fill-mode: forwards;
  opacity: 0;
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
  @media (max-width: 480px) {
    max-width: unset;
    height: 225px;
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
  @media (max-width: 350px) {
    font-size: 1rem;
  }
`

function Card(props) {
  return (
    <Link to={`/apartment/${props.id}`}>
      <CardWrapper
        style={{
          animationDelay: `calc(${props.countAnimation} * 0.15s)`,
        }}
      >
        <ImageCover src={props.cover} alt={props.title} />
        <CardLabel>{props.title}</CardLabel>
      </CardWrapper>
    </Link>
  )
}

export default Card
