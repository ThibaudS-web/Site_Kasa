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
  padding: 29px 27px 19px 18px;
  margin-bottom: 20px;
  margin-top: -20px;
  height: auto;
  background-color: ${colors.backgroundLight};
  color: ${colors.primary};
  line-height: 34px;
  font-weight: 400;
  font-size: 24px;
`

function Collapse({ label, content }) {
  const [isOpen, updateIsOpen] = useState(false)

  return (
    <>
      <ActionWrapper
        onClick={() => (isOpen ? updateIsOpen(false) : updateIsOpen(true))}
      >
        <LabelCollapse>{label}</LabelCollapse>
        <ArrowCollapse
          style={{ transform: isOpen ? "rotate(0)" : "rotate(180deg)" }}
          src={Arrow}
          alt="Cliquez pour dérouler"
        />
      </ActionWrapper>
      <Content style={{ display: isOpen ? "block" : "none" }}>
        {content}
      </Content>
    </>
  )
}

export default Collapse
