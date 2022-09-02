import React, { useState, createContext } from "react"
import fetchLocationData from "../../services/localFetch"
import { useNavigate } from "react-router-dom"

export const FetchDataContext = createContext()

export const FetchDataProvider = ({ children }) => {
  const navigate = useNavigate()

  const [locationData, setLocationData] = useState({})
  const [allLocationsData, setAllLocationsData] = useState([])
  const [allLocationLoading, setAllLocationLoading] = useState(false)
  const [isLocationLoading, setIsLocationLoading] = useState(false)

  async function fetchLocationById(locId) {
    try {
      const response = await fetchLocationData.getLocById(locId)
      if (response) {
        setLocationData(response)
        setIsLocationLoading(true)
      } else {
        navigate("/error404", { replace: true })
      }
    } catch (err) {
      navigate("/api-error", { replace: true })
    }
  }

  async function fetchAllLocations() {
    try {
      const response = await fetchLocationData.getAll()
      if (response) {
        setAllLocationsData(response)
        setAllLocationLoading(true)
      } else {
        navigate("/error404", { replace: true })
      }
    } catch (err) {
      navigate("/api-error", { replace: true })
      console.log(err)
    }
  }

  return (
    <FetchDataContext.Provider
      value={{
        isLocationLoading,
        setIsLocationLoading,
        allLocationLoading,
        locationData,
        allLocationsData,
        fetchLocationById,
        fetchAllLocations,
      }}
    >
      {children}
    </FetchDataContext.Provider>
  )
}
