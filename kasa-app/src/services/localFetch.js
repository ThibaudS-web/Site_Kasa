const fetchLocationUrl = `${process.env.PUBLIC_URL}/mock/locations.json`

async function getAll() {
  try {
    const result = await fetch(fetchLocationUrl)
    const data = await result.json()
    return data
  } catch (err) {
    throw new Error("Error API : ", err)
  }
}

async function getLocById(locId) {
  try {
    const result = await fetch(fetchLocationUrl)
    const data = await result.json()
    const locationById = data.filter((loc) => loc.id === locId)[0]
    return locationById
  } catch (err) {
    throw new Error("Error API : ", err)
  }
}

const fetchLocationData = {
  getAll,
  getLocById,
}

export default fetchLocationData
