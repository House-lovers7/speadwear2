import { push } from 'connected-react-router'
import { deleteCoordinateAction, fetchCoordinatesAction } from './actions'
import axiosConverter from '../../function/axiosConverter'
import axios from 'axios'
import * as APIS from '../api/actions'
import * as URLS from '../../urls'
// import {hideLoadingAction, showLoadingAction} from "../loading/actions";
// import {createPaymentIntent} from "../payments/operations"

export const fetchAllCoordinates = (userId, coordinateId) => {
  const data = {
    coordinateId: coordinateId,
  }
  return (dispatch) => {
    dispatch(APIS.fetchBeginAction())
    return axiosConverter
      .get(URLS.coordinateIndex(userId), { data }, { credentials: true })
      .then((response) => {
        dispatch(APIS.fetchSuccessAction(response))
        console.log(response)
        dispatch(fetchCoordinatesAction(response.data.coordinates))
        console.log(response.data.coordinates)
        return response.data.coordinates
      })
      .catch((error) => {
        dispatch(APIS.fetchFailureAction(error))
        console.log(error)
      })
  }
}

export const fetchSingleCoordinates = (userId) => {
  return (dispatch) => {
    dispatch(APIS.fetchBeginAction())
    return axiosConverter
      .get(URLS.coordinateDefault(userId))
      .then((response) => {
        dispatch(APIS.fetchSuccessAction(response))
        console.log(response)
        dispatch(fetchCoordinatesAction(response.data.coordinates))
        console.log(response.data.coordinates)
        return response.data.coordinates
      })
      .catch((error) => {
        dispatch(APIS.fetchFailureAction(error))
        console.log(error)
      })
  }
}

//idとuserIdの処理は残価代
export const createCoordinate = (id, userId, season, tpo, gender, size, price, image, description, rating) => {
  const coordinate = {
    id: id,
    userId: userId,
    season: season,
    tpo: tpo,
    gender: gender,
    size: size,
    price: price,
    image: image,
    description: description,
    rating: rating,
  }
  return (dispatch) => {
    dispatch(APIS.postBeginAction())
    return axiosConverter
      .post(URLS.coordinateDefault(userId), coordinate, { credentials: true })
      .then((response) => {
        dispatch(APIS.postSuccessAction(response))
        console.log(response)
        return response
      })
      .catch((error) => {
        dispatch(APIS.postFailureAction(error))
        console.log(error)
      })
  }
}

export const deleteCoordinate = (userId, coordinateId) => {
  return (dispatch) => {
    dispatch(APIS.deleteBeginAction())
    return axiosConverter
      .delete(URLS.coordinateIndex(userId, coordinateId), { credentials: true })
      .then((response) => {
        dispatch(APIS.deleteSuccessAction(response))
        console.log(response)
        dispatch(deleteCoordinateAction(response.status))
        console.log(response.status)
        return response.status
      })
      .catch((error) => {
        dispatch(APIS.deleteFailureAction(error))
        console.log(error)
      })
  }
}
