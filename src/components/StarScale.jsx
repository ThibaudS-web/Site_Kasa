/* eslint-disable react/prop-types */
import React from "react"
import styled from "styled-components"
import colors from "../utils/colors"

const genericStar = `
  color: ${colors.primary};
  font-size: 30px;
  @media (max-width: 768px) {
    font-size: 24px;
  }
  @media (max-width: 480px) {
    font-size: 18px;
  }
`
const EmptyStar = styled.i`
  ${genericStar}
  color: ${colors.profilDefault};
`
const FullStar = styled.i`
  ${genericStar}
  color: ${colors.primary};
`

function StarScale({ ratingValue, starType }) {
  const range = [1, 2, 3, 4, 5]
  const scaleType =
    starType === "full" ? (
      <FullStar className="fa-solid fa-star" />
    ) : (
      <EmptyStar className="fa-solid fa-star" />
    )

  return starType === "full"
    ? range.map((value) =>
        ratingValue >= value ? (
          <span key={value.toString()}>{scaleType}</span>
        ) : null
      )
    : range.map((value) =>
        ratingValue < value ? (
          <span key={value.toString()}>{scaleType}</span>
        ) : null
      )
}

export default StarScale
