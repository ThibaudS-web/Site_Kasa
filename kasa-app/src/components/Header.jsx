import React from "react"
import styled from "styled-components"
import { NavLink } from "react-router-dom"
import { useMediaPredicate } from "react-media-hook"
import colors from "../utils/colors"
import Logo from "../assets/logo.png"

const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: auto;
  margin: 40px 0 15px 0px;
  width: 100%;
  @media (max-width: 480px) {
    margin: 0px;
  }
`

const KasaLogo = styled.img`
  width: 100%;
  max-width: 210px;
  height: 90px;
  margin-left: -10px;
  @media (max-width: 480px) {
    width: auto;
    height: 80px;
  }
`

const Navigation = styled.nav`
  display: flex;
  @media (max-width: 480px) {
    padding: 0px 10px;
    justify-content: space-between;
    width: 110px;
  }
`

function Header() {
  const isMobile = useMediaPredicate("(max-width: 480px)")

  const linkStyle = ({ isActive }) => ({
    color: colors.primary,
    marginLeft: isMobile ? "0px" : "57px",
    fontWeight: 500,
    fontSize: isMobile ? "12px" : "24px",
    textDecoration: isActive ? "underline" : "none",
  })

  return (
    <HeaderWrapper>
      <KasaLogo
        onClick={() => {
          console.log(isMobile)
        }}
        src={Logo}
        alt="logo de kasa"
      />
      <Navigation>
        <NavLink style={linkStyle} to="/">
          Accueil
        </NavLink>
        <NavLink style={linkStyle} to="/about">
          A propos
        </NavLink>
      </Navigation>
    </HeaderWrapper>
  )
}

export default Header
