import { push } from 'connected-react-router'
import axiosConverter from '../../function/axiosConverter'
import axios from 'axios'
import { deleteCommentAction, fetchCommentsAction, createCommentAction, updateCommentAction } from './actions'
import * as APIS from '../api/actions'
import * as URLS from '../../urls'

export const createItemComment = (itemId, userId, contents) => {
  const commentData = {
    user_id: userId,
    item_id: itemId,
    comment: contents,
  }
  return (dispatch) => {
    dispatch(APIS.postBeginAction())
    return axios
      .post(URLS.commentItemDefault(userId, itemId), commentData)
      .then((response) => {
        dispatch(APIS.postSuccessAction(response))
        console.log(response)
        dispatch(createItemCommentAction(response.data.comments))
        console.log(response.data.comments)
        return response.data.comments
      })
      .catch((error) => {
        dispatch(APIS.postFailureAction(error))
        console.log(error)
      })
  }
}

export const createCoordinateComment = (coordinateId, userId, comment) => {
  const commentData = {
    user_id: userId,
    coordinate_id: coordinateId,
    comment: comment,
  }

  return (dispatch) => {
    dispatch(APIS.postBeginAction())
    return axios
      .post(URLS.commentCoordinateDefault(), commentData)
      .then((response) => {
        dispatch(APIS.postSuccessAction(response))
        console.log(response)
        dispatch(createCoordinateCommentAction(response.data.comments))
        console.log(response.data.comments)
        return response.data.comments
      })
      .catch((error) => {
        dispatch(APIS.postFailureAction(error))
        console.log(error)
      })
  }
}
