export const FETCH_ITEMS = 'FETCH_ITEMS'
export const DELETE_ITEM = 'DELETE_ITEM'

export const deleteCoordinateAction = (coordinates) => {
  return {
    type: 'DELETE_ITEM',
    payload: coordinates,
  }
}

export const fetchCoordinatesAction = (coordinates) => {
  return {
    type: 'FETCH_ITEMS',
    payload: coordinates,
  }
}
