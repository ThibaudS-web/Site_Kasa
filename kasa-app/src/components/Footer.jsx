import React from "react"
import styled from "styled-components"
import LogoFooter from "../assets/logo_footer.png"

const FooterWrapper = styled.div`
  width: 100%;
  height: 210px;
  background-color: #000;
  display: flex;
  justify-content: center;
  margin-top: auto;
`
const AllRightPicture = styled.img`
  height: 115px;
  align-self: center;
  width: auto;
`

function Footer() {
  return (
    <FooterWrapper>
      <AllRightPicture src={LogoFooter} alt="Kasa, tout droit réservé" />
    </FooterWrapper>
  )
}

export default Footer
