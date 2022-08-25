/* eslint-disable react/prop-types */
import React, { useState } from "react"
import styled from "styled-components"
import colors from "../utils/colors"
import Arrow from "../assets/arrow_collapse.png"

const ActionWrapper = styled.div`
  width: 80%;
  height: 50px;
  margin-bottom: 20px;
  color: white;
  background-color: ${colors.primary};
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  position: relative;
`
const LabelCollapse = styled.h2`
  font-weight: 500;
  margin-left: 18px;
`

const ArrowCollapse = styled.img`
  width: 24px;
  height: 14px;
  margin-right: 18px;
`

const Content = styled.div`
  width: calc(80% - (29px + 18px));
  margin-bottom: 20px;
  height: auto;
  background-color: ${colors.backgroundLight};
  color: ${colors.primary};
  line-height: 34px;
  padding: 29px 27px 19px 18px;
  font-weight: 400;
  font-size: 24px;
`

function Collapse({ label }) {
  const [isOpen, updateIsOpen] = useState(false)

  return (
    <>
      <ActionWrapper
        onClick={() => {
          updateIsOpen(true)
        }}
        style={{ marginBottom: isOpen ? "-10px" : "20px" }}
      >
        <LabelCollapse>{label}</LabelCollapse>
        <ArrowCollapse src={Arrow} alt="Cliquez pour dérouler" />
      </ActionWrapper>
      <Content>
        Les annonces postées sur Kasa garantissent une fiabilité totale. Les
        photos sont conformes aux logements, et toutes les informations sont
        régulièrement vérifiées par nos équipes.
      </Content>
    </>
  )
}

export default Collapse
