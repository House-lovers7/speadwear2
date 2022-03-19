export const FETCH_ITEMS = 'FETCH_ITEMS'
export const DELETE_ITEM = 'DELETE_ITEM'

export const deleteItemAction = (items) => {
  return {
    type: 'DELETE_ITEM',
    payload: items,
  }
}

export const fetchItemsAction = (items) => {
  return {
    type: 'FETCH_ITEMS',
    payload: items,
  }
}
