import React, { useState, createContext } from "react"
import fetchLocationData from "../../services/localFetch"
import { useNavigate } from "react-router-dom"

export const FetchDataContext = createContext()

export const FetchDataProvider = ({ children }) => {
  const navigate = useNavigate()
  
  const [locationData, setLocationData] = useState({})
  const [locationsData, setLocationsData] = useState([])
  const [allLocationLoading, setAllLocationLoading] = useState(false)
  const [isLocationLoading, setIsLocationLoading] = useState(false)
  const [error404, setError404] = useState(false)

  async function fetchLocationById(locId) {
    try {
      setError404(false)
      const response = await fetchLocationData.getLocById(locId)
      if (response) {
        setLocationData(response)
      } else {
        setIsLocationLoading(false)
        navigate("/error404", { replace: true })
      }
    } catch (err) {
      navigate("/api-error", { replace: true })
    } finally {
      setIsLocationLoading(true)
      console.log("response in provider : ", locationData)
    }
  }

  async function fetchAllLocations() {
    // setIsLocationLoading(false)
    try {
      const response = await fetchLocationData.getAll()
      if (response) {
        setLocationsData(response)
      } else {
        navigate("/error404", { replace: true })
      }
    } catch (err) {
      console.log(err)
    } finally {
      setAllLocationLoading(true)
    }
  }

  return (
    <FetchDataContext.Provider
      value={{
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
