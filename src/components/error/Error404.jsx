import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import ErrPicture from "../../assets/code_error.png"
import colors from "../../utils/colors"

const ErrorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`

const ErrorPicture = styled.img`
  width: 75%;
  margin-top: 15vh;
  margin-bottom: 15vh;
`

const StyledLink = styled(Link)`
  font-size: 18px;
  color: ${colors.primary};
  margin-bottom: 20px;
`

function Error() {
  return (
    <ErrorWrapper>
      <ErrorPicture src={ErrPicture} alt="Error 404" />
      <StyledLink to="/">Retouner sur la page d&apos;accueil</StyledLink>
    </ErrorWrapper>
  )
}

export default Error
