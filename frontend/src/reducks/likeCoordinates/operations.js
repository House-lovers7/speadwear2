import { push } from 'connected-react-router'

import { hideLoadingAction, showLoadingAction } from '../loading/actions'
import axiosConverter from '../../function/axiosConverter'
import * as APIS from '../api/actions'
import * as URLS from '../../urls'

export const fetchAllLikeCoordinate = (likeCoordinateId) => {
  const data = {}
  return (dispatch) => {
    dispatch(APIS.fetchBeginAction())
    return axiosConverter
      .get(URLS.likeCoordinateIndex(likeCoordinateId), { data })
      .then((response) => {
        dispatch(APIS.fetchSuccessAction(response))
        console.log(response)
        // return response
        //showアクションのデータをもってくる
        dispatch(fetchLikeCoordinateAction(response.likeCoordinate))
      })
      .catch((error) => {
        dispatch(APIS.fetchFailureAction(error))
        console.log(error)
      })
  }
}

export const createLikeCoordinate = (userId, coordinateId) => {
  const coordinate = {
    user_id: userId,
    item_id: coordinateId,
  }
  return (dispatch) => {
    dispatch(APIS.postBeginAction())
    return axios
      .post(URLS.likeCoordinateDefault(userId, coordinateId), coordinate)
      .then((response) => {
        dispatch(APIS.postSuccessAction(response))
        console.log(response)
        dispatch(createLikeCoordinateAction(response.data.likeCoordinates))
        console.log(response.data.likeCoordinates)
        return response.data.likeCoordinates
      })
      .catch((error) => {
        dispatch(APIS.postFailureAction(error))
        console.log(error)
      })
  }
}
