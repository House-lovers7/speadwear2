import axios from 'axios'
import { coordinateIndex } from '/urls/index'

export const fetchCoordainate = (coordinateId) => {
  return axios
    .get(coordinateIndex(coordinateId))
    .then((res) => {
      return res.data
    })
    .catch((e) => console.error(e))
}
