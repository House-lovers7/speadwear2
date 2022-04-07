export const DELETE_COMMENT = 'DELETE_COMMENT'
export const FETCH_COMMENTS = 'FETCH_COMMENTS'
export const CREATE_COMMENT = 'CREATE_COMMENT'

export const deleteCommentAction = (comment) => {
  return {
    type: 'DELETE_COMMENT',
    payload: comment,
  }
}

export const fetchCommentsAction = (comments) => {
  return {
    type: 'FETCH_COMMENTS',
    payload: comments,
  }
}

export const createCommentAction = (comment) => {
  return {
    type: 'CREATE_COMMENT',
    payload: comment,
  }
}
