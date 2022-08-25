/* eslint-disable react/prop-types */
import React from "react"
import { useParams } from "react-router-dom"

function ProfileLocation({ locations }) {
  const { locId } = useParams()
  const allLocations = locations.get()
  const locationProfil = allLocations.filter((loc) => loc.id === locId)[0]
  console.log(locationProfil)
  return (
    <>
      <div>La page destinée à la location ID : {locationProfil.id}</div>
      <div>La page destinée à la location NAME: {locationProfil.title}</div>
      <div>La page destinée à la location RATING: {locationProfil.rating}</div>
    </>
  )
}

export default ProfileLocation
