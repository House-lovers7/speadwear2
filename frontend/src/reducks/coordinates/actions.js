export const FETCH_COORDINATE = 'FETCH_COORDINATE'
export const DELETE_COORDINATE = 'DELETE_COORDINATE'

export const deleteCoordinateAction = (coordinates) => {
  return {
    type: 'DELETE_COORDINATE',
    payload: coordinates,
  }
}

export const fetchCoordinatesAction = (coordinates) => {
  return {
    type: 'FETCH_COORDINATE',
    payload: coordinates,
  }
}
