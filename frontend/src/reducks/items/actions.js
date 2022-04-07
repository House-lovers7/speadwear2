export const DELETE_ITEM = 'DELETE_ITEM'
export const FETCH_ITEMS = 'FETCH_ITEMS'
export const CREATE_ITEM = 'CREATE_ITEM'
export const UPDATE_ITEM = 'UPDATE_ITEM'

export const deleteItemAction = (item) => {
  return {
    type: 'DELETE_ITEM',
    payload: item,
  }
}

export const fetchItemsAction = (items) => {
  return {
    type: 'FETCH_ITEMS',
    payload: items,
  }
}

export const createItemAction = (item) => {
  return {
    type: 'CREATE_ITEM',
    payload: item,
  }
}

export const updateItemAction = (item) => {
  return {
    type: 'UPDATE_ITEM',
    payload: item,
  }
}
