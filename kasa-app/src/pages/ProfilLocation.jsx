/* eslint-disable react/prop-types */
import React, { useEffect, useContext } from "react"
import styled from "styled-components"
import { useParams, Navigate } from "react-router-dom"
import colors from "../utils/colors"
import Tag from "../components/Tag"
import Slider from "../components/Slider"
import StarScale from "../components/StarScale"
import Collapse from "../components/Collapse"
import Loader from "../components/Loader"
import { FetchDataContext } from "../utils/context/FetchDataProvider"

const p = `
  color: ${colors.primary};
  font-size: 18px;
  margin: 0 10px 0 0;
    @media (max-width: 480px) {
    font-size: 14px;
  }
`
const Geolocation = styled.p`
  ${p}
  margin-top: 10px;
`
const HomeOwnerName = styled.p`
  ${p}
  text-align: end;
  width: 90px;
  line-height: 26px;
  word-wrap: break-word;
  word-break: break-word;
  align-self: center;
  @media (max-width: 480px) {
    width: 80px;
  }
`
const HomeOwerPicture = styled.img`
  border-radius: 50%;
  width: 64px;
  height: 64px;
  align-self: center;
`
const Title = styled.h1`
  color: ${colors.primary};
  margin: 0;
  @media (max-width: 1100px) and (min-width: 500px) {
    height: 75px;
  }
  @media (max-width: 768px) {
    font-size: 24px;
  }
  @media (max-width: 480px) {
    font-size: 18px;
    width: auto;
    line-height: 25px;
  }
`
const SecondSectionWrapper = styled.div`
  display: flex;
  margin: 0;
  flex-direction: column;
  align-items: flex-end;
  @media (max-width: 480px) {
    margin: 20px 0;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
`

const OwnerWrapper = styled.div`
  display: flex;
  margin: -10px 0 20px 0;
  @media (max-width: 768px) {
    margin-bottom: 15px;
  }
  @media (max-width: 480px) {
    flex-direction: row;
    margin: 0px;
  }
`
const TagsWrapper = styled.div`
  display: flex;
  width: auto;
  margin: 10px 0 20px 0;
  flex-wrap: wrap;
  @media (max-width: 480px) {
    margin: 0px;
  }
`
const StarsWrapper = styled.div`
  margin: 0;
  width: 200px;
  display: flex;
  justify-content: space-between;
  @media (max-width: 1100px) and (min-width: 500px) {
    margin-top: 49px;
  }
  @media (max-width: 768px) {
    width: 150px;
  }
  @media (max-width: 480px) {
    width: 120px;
  }
`

const FirstSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 75%;
  margin: 0;
  @media (max-width: 480px) {
    width: 100%;
  }
`
const ResponsiveWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
  }
`

const CollapseSectionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`
const CollapseWrapper = styled.div`
  width: 45%;
  margin: 0;
  @media (max-width: 768px) {
    width: 100%;
  }
`

function ProfileLocation() {
  const { locId } = useParams()
  const {
    errorAPI,
    error404,
    locationData,
    isLocationLoading,
    fetchLocationById,
  } = useContext(FetchDataContext)

  console.log(locId)

  useEffect(() => {
    console.log("je passe dans le useEffect")
    fetchLocationById(locId)
  }, [locId])
  
  console.log(locationData)

  if (errorAPI) {
    return (
      <span>
        Oups une erreur est survenue ... Veuillez recommencer ultérieurement.
      </span>
    )
  }

  console.log("Error404 : ", error404)

  if (error404 && Object.keys(locationData).length === 0) {
    return <Navigate to="/error404" />
  }

  const rating = parseInt(locationData.rating)

  return (
    <div>
      {isLocationLoading ? (
        <>
          <Slider pictures={locationData.pictures} />
          <ResponsiveWrapper>
            <FirstSectionWrapper>
              <Title>{locationData.title}</Title>
              <Geolocation>{locationData.location}</Geolocation>
              <TagsWrapper>
                {locationData.tags.map((tag, index) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <Tag key={`${tag}-${index}`} label={tag} />
                ))}
              </TagsWrapper>
            </FirstSectionWrapper>

            <SecondSectionWrapper>
              <OwnerWrapper>
                <HomeOwnerName>{locationData.host.name}</HomeOwnerName>
                <HomeOwerPicture
                  src={locationData.host.picture}
                  alt={locationData.host.name}
                />
              </OwnerWrapper>
              <StarsWrapper>
                <StarScale ratingValue={rating} starType="full" />
                <StarScale ratingValue={rating} starType="empty" />
              </StarsWrapper>
            </SecondSectionWrapper>
          </ResponsiveWrapper>

          <CollapseSectionWrapper>
            <CollapseWrapper>
              <Collapse
                pageType="profil"
                label="Description"
                contentType="paragraph"
                contentText={locationData.description}
              />
            </CollapseWrapper>
            <CollapseWrapper>
              <Collapse
                pageType="profil"
                label="Équipements"
                contentType="list"
                contentText={locationData.equipments}
              />
            </CollapseWrapper>
          </CollapseSectionWrapper>
        </>
      ) : (
        <Loader />
      )}
    </div>
  )
}

export default ProfileLocation
