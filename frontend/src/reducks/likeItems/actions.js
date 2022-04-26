export const DELETE_LIKE_ITEM = 'DELETE_LIKE_ITEM'
export const FETCH_LIKEI_TEMS = 'FETCH_LIKE_ITEMS'
export const CREATE_LIKE_ITEM = 'CREATE_LIKE_ITEM'

export const deleteLikeItemAction = (likeItem) => {
  return {
    type: 'DELETE_LIKE_ITEM',
    payload: likeItem,
  }
}

export const fetchLikeItemsAction = (likeItems) => {
  return {
    type: 'FETCH_LIKE_ITEMS',
    payload: likeItems,
  }
}

export const createLikeItemAction = (likeItem) => {
  return {
    type: 'CREATE_LIKE_ITEM',
    payload: likeItem,
  }
}
