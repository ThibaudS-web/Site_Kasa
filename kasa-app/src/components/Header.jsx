import React from "react"
import styled from "styled-components"
import { NavLink } from "react-router-dom"
import colors from "../utils/colors"
import Logo from "../assets/logo.png"

const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: auto;
  margin: 40px 0 15px 0;
  width: 100%;
`

const KasaLogo = styled.img`
  width: 100%;
  max-width: 210px;
  height: 90px;
`

const Navigation = styled.nav`
  display: flex;
`

const linkStyle = ({ isActive }) => ({
  color: colors.primary,
  marginLeft: "57px",
  fontWeight: 500,
  fontSize: "24px",
  textDecoration: isActive ? "underline" : "none",
})

function Header() {
  return (
    <HeaderWrapper>
      <KasaLogo src={Logo} alt="logo de kasa" />
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
