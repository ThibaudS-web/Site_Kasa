import React from "react"
import styled from "styled-components"
import LogoFooter from "../assets/logo_footer.png"

const FooterWrapper = styled.footer`
  width: 100%;
  height: 210px;
  background-color: #000;
  display: flex;
  justify-content: center;
  margin-top: auto;
  @media (max-width: 480px) {
    margin-top: 20px;
  }
`
const AllRightPicture = styled.img`
  height: 115px;
  align-self: center;
  width: auto;
  @media (max-width: 480px) {
    height: 80px;
  }
`

function Footer() {
  return (
    <FooterWrapper>
      <AllRightPicture src={LogoFooter} alt="Kasa, tout droit réservé" />
    </FooterWrapper>
  )
}

export default Footer
