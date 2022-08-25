/* eslint-disable react/prop-types */
import React from "react"
import styled from "styled-components"
import { useParams } from "react-router-dom"
import colors from "../utils/colors"
import Tag from "../components/Tag"
import Slider from "../components/Slider"

const Title = styled.h1`
  color: ${colors.primary};
`
const Geolocation = styled.p`
  color: ${colors.primary};
  font-size: 18px;
`

const TagsWrapper = styled.div`
  display: flex;
  width: 580px;
`

function ProfileLocation({ locations }) {
  const { locId } = useParams()
  const allLocations = locations.get()
  const locationProfil = allLocations.filter((loc) => loc.id === locId)[0]
  console.log(locationProfil)

  return (
    <>
      <Slider pictures={locationProfil.pictures} />
      <Title>{locationProfil.title}</Title>
      <Geolocation>{locationProfil.location}</Geolocation>
      <TagsWrapper>
        {locationProfil.tags.map((tag, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <Tag key={`${tag}-${index}`} label={tag} />
        ))}
      </TagsWrapper>
    </>
  )
}

export default ProfileLocation
