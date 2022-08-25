import locations from "../data/locations.json"

const fetchLocationData = {
  get() {
    return locations
  },
}

export default fetchLocationData
