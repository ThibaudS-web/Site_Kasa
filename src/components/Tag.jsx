/* eslint-disable react/prop-types */
import React from "react"
import styled from "styled-components"
import colors from "../utils/colors"

const TagStyle = styled.div`
  width: auto;
  height: auto;
  background-color: ${colors.primary};
  color: white;
  font-size: 14px;
  border-radius: 10px;
  padding: 10px 37px;
  display: flex;
  margin: 10px 10px 0 0;
  @media (max-width: 480px) {
    white-space: nowrap;
    padding: 5px 25px;
  }
`

function Tag({ label }) {
  return <TagStyle>{label}</TagStyle>
}

export default Tag
