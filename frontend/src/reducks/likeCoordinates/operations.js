import { push } from 'connected-react-router'

import { hideLoadingAction, showLoadingAction } from '../loading/actions'
import axiosConverter from '../../function/axiosConverter'
import * as APIS from '../api/actions'
import * as URLS from '../../urls'

export const fetchAllLikecoordinate = (likeCoordinateId) => {
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
