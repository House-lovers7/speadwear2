import { push } from 'connected-react-router'
import { hideLoadingAction, showLoadingAction } from '../loading/actions'
import axiosConverter from '../../function/axiosConverter'
import * as APIS from '../api/actions'
import * as URLS from '../../urls'

export const fetchAllLikeItem = (likeItemId) => {
  const data = {}
  return (dispatch) => {
    dispatch(APIS.fetchBeginAction())
    return axiosConverter
      .get(URLS.likeItemIndex(likeItemId), { data })
      .then((response) => {
        dispatch(APIS.fetchSuccessAction(response))
        console.log(response)
        // return response
        //showアクションのデータをもってくる
        dispatch(fetchLikeItemAction(response.likeItem))
      })
      .catch((error) => {
        dispatch(APIS.fetchFailureAction(error))
        console.log(error)
      })
  }
}

export const createLikeItem = (userId, itemId) => {
  const item = {
    user_id: userId,
    item_id: itemId,
  }
  return (dispatch) => {
    dispatch(APIS.postBeginAction())
    return axios
      .post(URLS.likeItemPost(userId, itemId), item)
      .then((response) => {
        dispatch(APIS.postSuccessAction(response))
        console.log(response)
        dispatch(createLikeItemAction(response.data.likeItems))
        console.log(response.data.likeItems)
        return response.data.likeItem
      })
      .catch((error) => {
        dispatch(APIS.postFailureAction(error))
        console.log(error)
      })
  }
}
