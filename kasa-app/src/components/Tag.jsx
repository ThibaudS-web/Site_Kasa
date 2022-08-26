/* eslint-disable react/prop-types */
import React from "react"
import styled from "styled-components"
import colors from "../utils/colors"

const TagStyle = styled.div`
  width: auto;
  height: 25px;
  background-color: ${colors.primary};
  color: white;
  font-size: 14px;
  border-radius: 10px;
  padding: 5px 37px;
  display: flex;
  margin: 0 10px 0 0;
`

function Tag({ label }) {
  return (
    <TagStyle>
      <div>{label}</div>
    </TagStyle>
  )
}

export default Tag
