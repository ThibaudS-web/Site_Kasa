/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react"
import Gallery from "../components/Gallery"
import Slogan from "../components/Slogan"
import Loader from "../components/Loader"

function Home({ locations }) {
  const [error, setError] = useState(false)
  const [isDataLoading, setDataLoading] = useState(false)
  const [locationsData, setLocationsData] = useState([])

  useEffect(() => {
    async function fetchLocations() {
      try {
        const result = await locations
        setLocationsData(result)
      } catch (err) {
        console.log(err)
        setError(true)
      } finally {
        setDataLoading(true)
      }
    }
    fetchLocations()
  }, [])

  if (error) {
    return (
      <span>
        Oups une erreur est survenue ... Veuillez recommencer ultérieurement.
      </span>
    )
  }

  return (
    <>
      <Slogan />
      {isDataLoading ? <Gallery locations={locationsData} /> : <Loader />}
    </>
  )
}

export default Home
