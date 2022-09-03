/* eslint-disable react/prop-types */
import React, { useState } from "react"
import styled from "styled-components"
import colors from "../utils/colors"
import Arrow from "../assets/arrow_collapse.png"

const ActionWrapper = styled.div`
  height: 50px;
  color: white;
  background-color: ${colors.primary};
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  position: relative;
  ${(props) => (props.pageType === "about" ? ` width: 80%;` : `width: 100%;`)}
  @media (max-width: 768px) {
    width: 100%;
  }
  @media (max-width: 480px) {
    height: 30px;
  }
`
const LabelCollapse = styled.h2`
  font-weight: 500;
  margin-left: 18px;
  @media (max-width: 480px) {
    font-size: 16px;
  }
`
const ArrowCollapse = styled.img`
  width: 24px;
  height: 14px;
  margin-right: 18px;
  transition: 400ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
  @media (max-width: 480px) {
    width: 20px;
    height: 10px;
  }
`
const Content = styled.div`
  margin-bottom: 20px;
  background-color: ${colors.backgroundLight};
  color: ${colors.primary};
  line-height: 34px;
  font-size: 24px;
  overflow: hidden;
  transition: 400ms cubic-bezier(0.25, 0.46, 0.45, 0.94);

  @media (max-width: 768px) {
    width: calc(100% - (29px + 18px));
  }
  @media (max-width: 480px) {
    font-size: 12px;
    padding: 20px 20px 19px 19px;
  }
  ${(props) =>
    props.pageType === "about"
      ? ` width: calc(80% - (29px + 18px));`
      : ` width: calc(100% - (29px + 18px)); list-style: none `}
`

function Collapse({ label, contentText, contentType, pageType }) {
  const [isOpen, updateIsOpen] = useState(false)

  return (
    <>
      <ActionWrapper
        pageType={pageType}
        onClick={() => (isOpen ? updateIsOpen(false) : updateIsOpen(true))}
      >
        <LabelCollapse>{label}</LabelCollapse>
        <ArrowCollapse
          style={{ transform: isOpen ? "rotate(0)" : "rotate(180deg)" }}
          src={Arrow}
          alt="Cliquez pour dérouler"
        />
      </ActionWrapper>
      <Content
        pageType={pageType}
        style={{
          height: isOpen ? "auto" : "0",
          padding: isOpen ? "29px 27px 19px 19px" : "0 27px 0 19px",
          opacity: isOpen ? "1" : "0",
        }}
      >
        {contentType === "paragraph"
          ? contentText
          : contentText.map((item, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <li key={`${index}-${item}`}>{item}</li>
            ))}
      </Content>
    </>
  )
}

export default Collapse
