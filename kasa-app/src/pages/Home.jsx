/* eslint-disable react/prop-types */
import React from "react"
import Gallery from "../components/Gallery"
import Slogan from "../components/Slogan"

function Home({ location }) {
  const locations = location.get()

  return (
    <>
      <Slogan />
      <Gallery locations={locations} />
    </>
  )
}

export default Home
