import React, { useState, createContext } from "react"
import fetchLocationData from "../../services/localFetch"
import { useNavigate } from "react-router-dom"

export const FetchDataContext = createContext()

export const FetchDataProvider = ({ children }) => {
  const navigate = useNavigate()

  const [locationData, setLocationData] = useState({})
  const [allLocationsData, setLocationsData] = useState([])
  const [allLocationLoading, setAllLocationLoading] = useState(false)
  const [isLocationLoading, setIsLocationLoading] = useState(false)

  async function fetchLocationById(locId) {
    try {
      const response = await fetchLocationData.getLocById(locId)
      if (response) {
        setLocationData(response)
      } else {
        navigate("/error404", { replace: true })
      }
    } catch (err) {
      navigate("/api-error", { replace: true })
    } finally {
      console.log("Finally")
      setIsLocationLoading(true)
    }
  }

  async function fetchAllLocations() {
    setIsLocationLoading(false)
    try {
      const response = await fetchLocationData.getAll()
      if (response) {
        setLocationsData(response)
      } else {
        navigate("/error404", { replace: true })
      }
    } catch (err) {
      navigate("/api-error", { replace: true })
      console.log(err)
    } finally {
      setAllLocationLoading(true)
    }
  }

  return (
    <FetchDataContext.Provider
      value={{
        isLocationLoading,
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
