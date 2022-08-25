/* eslint-disable react/prop-types */
import React from "react"
// import styled from "styled-components"
import colors from "../utils/colors"
import CardLocation from "./Card"

const GalleryBG = {
  width: "calc(100% - 100px)",
  backgroundColor: colors.backgroundLight,
  height: "auto",
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "40px",
  gridAutoRows: "minmax(100px, auto)",
  borderRadius: "30px",
  padding: "50px",
}

function Gallery({ locations }) {
  console.log(locations.map((loc) => loc.id))
  return (
    <div style={GalleryBG}>
      {locations.map((loc) => (
        <CardLocation key={loc.id} title={loc.title} cover={loc.cover} />
      ))}
    </div>
  )
}

export default Gallery
