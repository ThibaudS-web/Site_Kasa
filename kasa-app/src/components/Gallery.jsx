/* eslint-disable react/prop-types */
import React from "react"
import styled from "styled-components"
import colors from "../utils/colors"
import CardLocation from "./Card"

const GalleryBG = styled.div`
  width: calc(100% - 100px);
  background-color: ${colors.backgroundLight};
  height: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 40px;
  grid-auto-rows: minmax(100px, auto);
  border-radius: 30px;
  padding: 50px;
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
    background-color: unset;
    padding: 0px;
    margin: 0;
    width: 100%;
  }
`

function Gallery({ locations }) {
  return (
    <GalleryBG>
      {locations.map((loc) => (
        <CardLocation
          key={loc.id}
          id={loc.id}
          title={loc.title}
          cover={loc.cover}
        />
      ))}
    </GalleryBG>
  )
}

export default Gallery
