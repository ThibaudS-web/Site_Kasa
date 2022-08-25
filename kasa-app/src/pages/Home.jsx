/* eslint-disable react/prop-types */
import React from "react"
import Gallery from "../components/Gallery"
import Slogan from "../components/Slogan"

function Home({ locations }) {
  const allLocations = locations.get()

  return (
    <>
      <Slogan />
      <Gallery locations={allLocations} />
    </>
  )
}

export default Home
