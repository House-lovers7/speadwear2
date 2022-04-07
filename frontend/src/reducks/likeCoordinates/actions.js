export const DELETE_LIKECOORDINATE = 'DELETE_LIKECOORDINATE'
export const FETCH_LIKECOORDINATES = 'FETCH_LIKECOORDINATES'
export const CREATE_LIKECOORDINATE = 'CREATE_LIKECOORDINATE'

export const deleteLikeCoordinateAction = (likeCoordinate) => {
  return {
    type: 'DELETE_LIKECOORDINATE',
    payload: likeCoordinate,
  }
}

export const fetchLikeCoordinatesAction = (likeCoordinates) => {
  return {
    type: 'FETCH_LIKECOORDINATES',
    payload: likeCoordinates,
  }
}

export const createLikeCoordinateAction = (likeCoordinate) => {
  return {
    type: 'CREATE_LIKECOORDINATE',
    payload: likeCoordinate,
  }
}
