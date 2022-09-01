/* eslint-disable react/prop-types */
import React, { useEffect, useContext } from "react"
import Gallery from "../components/Gallery"
import Slogan from "../components/Slogan"
import Loader from "../components/Loader"
import { FetchDataContext } from "../utils/context/FetchDataProvider"

function Home() {
  const { fetchAllLocations, errorAPI, allLocationLoading, locationsData } =
    useContext(FetchDataContext)

  useEffect(() => {
    fetchAllLocations()
  }, [])

  if (errorAPI) {
    return (
      <span>
        Oups une erreur est survenue ... Veuillez recommencer ultérieurement.
      </span>
    )
  }

  return (
    <>
      <Slogan />
      {allLocationLoading ? <Gallery locations={locationsData} /> : <Loader />}
    </>
  )
}

export default Home
