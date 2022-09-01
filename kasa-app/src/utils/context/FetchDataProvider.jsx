import React, { useState, createContext } from "react"
import fetchLocationData from "../../services/localFetch"

export const FetchDataContext = createContext()

export const FetchDataProvider = ({ children }) => {
  const [locationData, setLocationData] = useState({})
  const [locationsData, setLocationsData] = useState([])
  const [allLocationLoading, setAllLocationLoading] = useState(false)
  const [isLocationLoading, setIsLocationLoading] = useState(false)
  const [errorAPI, setErrorAPI] = useState(false)
  const [error404, setError404] = useState(false)

  async function fetchLocationById(locId) {
    console.log("provider By ID")
    try {
      const response = await fetchLocationData.getLocById(locId)
      response ? setLocationData(response) : setError404(true)
    } catch (err) {
      console.log(err)
      setErrorAPI(true)
    } finally {
      setIsLocationLoading(true)
      console.log("in provider :", error404)
    }
  }

  async function fetchAllLocations() {
    try {
      const response = await fetchLocationData.getAll()
      setLocationsData(response)
    } catch (err) {
      console.log(err)
      setErrorAPI(true)
    } finally {
      setAllLocationLoading(true)
    }
  }

  return (
    <FetchDataContext.Provider
      value={{
        errorAPI,
        error404,
        isLocationLoading,
        allLocationLoading,
        locationData,
        locationsData,
        fetchLocationById,
        fetchAllLocations,
      }}
    >
      {children}
    </FetchDataContext.Provider>
  )
}
