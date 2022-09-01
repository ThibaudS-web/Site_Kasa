/* eslint-disable react/prop-types */
import React, { useEffect, useContext } from "react"
import Gallery from "../components/Gallery"
import Slogan from "../components/Slogan"
import Loader from "../components/Loader"
import { FetchDataContext } from "../utils/context/FetchDataProvider"

function Home() {
  const { fetchAllLocations, allLocationLoading, AllocationsData } =
    useContext(FetchDataContext)

  useEffect(() => {
    fetchAllLocations()
  }, [])

  return (
    <>
      <Slogan />
      {allLocationLoading ? (
        <Gallery locations={AllocationsData} />
      ) : (
        <Loader />
      )}
    </>
  )
}

export default Home
