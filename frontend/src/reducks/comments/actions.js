export const DELETE_ITEM_COMMENT = 'DELETE_ITEM_COMMENT'
export const FETCH_ITEM_COMMENTS = 'FETCH_ITEM_COMMENTS'
export const CREATE_ITEM_COMMENT = 'CREATE_ITEM_COMMENT'
export const DELETE_COORDINATE_COMMENT = 'DELETE_COORDINATE_COMMENT'
export const FETCH_COORDINATE_COMMENTS = 'FETCH_COORDINATE_COMMENTS'
export const CREATE_COORDINATE_COMMENT = 'CREATE_COORDINATE_COMMENT'

export const deleteItemCommentAction = (comment) => {
  return {
    type: 'DELETE_ITEM_COMMENT',
    payload: comment,
  }
}

export const fetchItemCommentsAction = (comments) => {
  return {
    type: 'FETCH_ITEM_COMMENTS',
    payload: comments,
  }
}

export const createItemCommentAction = (comment) => {
  return {
    type: 'CREATE_ITEM_COMMENT',
    payload: comment,
  }
}

export const deleteCoordinateCommentAction = (comment) => {
  return {
    type: 'DELETE_COORDINATE_COMMENT',
    payload: comment,
  }
}

export const fetchCoordinatesCommentsAction = (comments) => {
  return {
    type: 'FETCH_COORDINATE_COMMENTS',
    payload: comments,
  }
}

export const createCoordinateCommentAction = (comment) => {
  return {
    type: 'CREATE_COORDINATE_COMMENT',
    payload: comment,
  }
}
