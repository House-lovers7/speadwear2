export const FETCH_COORDINATES = 'FETCH_COORDINATES'
export const CREATE_COORDINATE = 'CREATE_COORDINATE'
export const DELETE_COORDINATE = 'DELETE_COORDINATE'
export const SET_COORDINATE_ID = 'SET_COORDINATE_ID'

export const deleteCoordinateAction = (coordinate) => {
  return {
    type: 'DELETE_COORDINATE',
    payload: coordinate,
  }
}

export const fetchCoordinatesAction = (coordinates) => {
  return {
    type: 'FETCH_COORDINATES',
    payload: coordinates,
  }
}

export const createCoordinateAction = (coordinate) => {
  return {
    type: 'CREATE_COORDINATE',
    payload: coordinate,
  }
}

export const setCoordinateIdAction = (coordinateState) => {
  return {
    type: 'SET_COORDINATE_ID',
    payload: {
      id: coordinateState.id,
    },
  }
}
