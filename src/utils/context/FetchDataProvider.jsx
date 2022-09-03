/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/prop-types */
import React, { useState, createContext } from "react"
import { useNavigate } from "react-router-dom"
import fetchLocationData from "../../services/localFetch"

export const FetchDataContext = createContext()

export function FetchDataProvider({ children }) {
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
      console.log(err)
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

  const sharedLocationData = {
    isLocationLoading,
    setIsLocationLoading,
    allLocationLoading,
    locationData,
    allLocationsData,
    fetchLocationById,
    fetchAllLocations,
  }

  return (
    <FetchDataContext.Provider value={sharedLocationData}>
      {children}
    </FetchDataContext.Provider>
  )
}
