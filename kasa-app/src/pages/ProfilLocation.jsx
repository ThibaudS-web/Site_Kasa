/* eslint-disable react/prop-types */
import React from "react"
import styled from "styled-components"
import { useParams } from "react-router-dom"
import colors from "../utils/colors"
import Tag from "../components/Tag"
import Slider from "../components/Slider"
import StarScale from "../components/StarScale"
import Collapse from "../components/Collapse"

const p = `
  color: ${colors.primary};
  font-size: 18px;
  margin: 0 10px 0 0;
`
const Geolocation = styled.p`
  ${p}
`
const HomeOwnerName = styled.p`
  ${p}
  text-align: end;
  width: 80px;
  line-height: 26px;
  word-wrap: break-word;
  word-break: break-word;
  align-self: center;
`
const HomeOwerPicture = styled.img`
  border-radius: 50%;
  width: 64px;
  height: 64px;
  align-self: center;
`
const Title = styled.h1`
  color: ${colors.primary};
`
const OwnerWrapper = styled.div`
  display: flex;
  margin: 0;
`
const TagsWrapper = styled.div`
  display: flex;
  width: auto;
  margin: 0;
  justify-content: space-between;
`
const StarWrapper = styled.div`
  margin: 0;
  width: 200px;
  display: flex;
  justify-content: space-between;
`

const FirstSectionWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const SecondSectionWrapper = styled.div`
  display: flex;
  margin: 25px 0;
  justify-content: space-between;
`
const CollapseSectionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

function ProfileLocation({ locations }) {
  const { locId } = useParams()
  const allLocations = locations.get()
  const locationProfil = allLocations.filter((loc) => loc.id === locId)[0]
  console.log(locationProfil)
  const rating = parseInt(locationProfil.rating)
  return (
    <>
      <Slider pictures={locationProfil.pictures} />
      <FirstSectionWrapper>
        <Title>{locationProfil.title}</Title>
        <OwnerWrapper>
          <HomeOwnerName>{locationProfil.host.name}</HomeOwnerName>
          <HomeOwerPicture
            src={locationProfil.host.picture}
            alt={locationProfil.host.name}
          />
        </OwnerWrapper>
      </FirstSectionWrapper>
      <Geolocation>{locationProfil.location}</Geolocation>
      <SecondSectionWrapper>
        <TagsWrapper>
          {locationProfil.tags.map((tag, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <Tag key={`${tag}-${index}`} label={tag} />
          ))}
        </TagsWrapper>
        <StarWrapper>
          <StarScale ratingValue={rating} starType="full" />
          <StarScale ratingValue={rating} starType="empty" />
        </StarWrapper>
      </SecondSectionWrapper>
      <CollapseSectionWrapper>
        <div style={{ width: "45%", margin: 0 }}>
          <Collapse
            pageType="profil"
            label="Description"
            contentType="paragraph"
            contentText={locationProfil.description}
          />
        </div>
        <div style={{ width: "45%", margin: 0 }}>
          <Collapse
            pageType="profil"
            label="Équipements"
            contentType="list"
            contentText={locationProfil.equipments}
          />
        </div>
      </CollapseSectionWrapper>
    </>
  )
}

export default ProfileLocation
