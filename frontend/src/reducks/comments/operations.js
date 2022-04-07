import { push } from 'connected-react-router'
import axiosConverter from '../../function/axiosConverter'
import { deleteCommentAction, fetchCommentsAction, createCommentAction, updateCommentAction } from './actions'
import * as APIS from '../api/actions'
import * as URLS from '../../urls'

export const fetchAllComment = (commentId) => {
  const data = {}
  return (dispatch) => {
    dispatch(APIS.fetchBeginAction())
    return axiosConverter
      .get(URLS.commentIndex(commentId), { data })
      .then((response) => {
        dispatch(APIS.fetchSuccessAction(response))
        console.log(response)
        // return response
        //showアクションのデータをもってくる
        dispatch(fetchCommentAction(response.comment))
      })
      .catch((error) => {
        dispatch(APIS.fetchFailureAction(error))
        console.log(error)
      })
  }
}

export const createComment = (id, userId, comment) => {
  const commentData = {
    id: id,
    userId: userId,
    comment: comment,
  }

  return (dispatch) => {
    dispatch(APIS.postBeginAction())
    return axiosConverter
      .post(URLS.signUp(), commentData, { withCredentials: true })
      .then((response) => {
        dispatch(APIS.postSuccessAction(response))
        console.log(response)
        dispatch(createCommentAction(response.data.comments))
        console.log(response.data.comments)
        return response.data.comments
      })
      .catch((error) => {
        dispatch(APIS.postFailureAction(error))
        console.log(error)
      })
  }
}
