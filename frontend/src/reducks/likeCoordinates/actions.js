export const DELETE_LIKE_COORDINATE = 'DELETE_LIKE_COORDINATE'
export const FETCH_LIKE_COORDINATES = 'FETCH_LIKE_COORDINATES'
export const CREATE_LIKE_COORDINATE = 'CREATE_LIKE_COORDINATE'

export const deleteLikeCoordinateAction = (likeCoordinate) => {
  return {
    type: 'DELETE_LIKE_COORDINATE',
    payload: likeCoordinate,
  }
}

export const fetchLikeCoordinatesAction = (likeCoordinates) => {
  return {
    type: 'FETCH_LIKE_COORDINATES',
    payload: likeCoordinates,
  }
}

export const createLikeCoordinateAction = (likeCoordinate) => {
  return {
    type: 'CREATE_LIKE_COORDINATE',
    payload: likeCoordinate,
  }
}
