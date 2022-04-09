export const DELETE_LIKEITEM = 'DELETE_LIKEITEM'
export const FETCH_LIKEITEMS = 'FETCH_LIKEITEMS'
export const CREATE_LIKEITEM = 'CREATE_LIKEITEM'

export const deleteLikeItemAction = (likeItem) => {
  return {
    type: 'DELETE_LIKEITEM',
    payload: likeItem,
  }
}

export const fetchLikeItemsAction = (likeItems) => {
  return {
    type: 'FETCH_LIKEITEMS',
    payload: likeItems,
  }
}

export const createLikeItemAction = (likeItem) => {
  return {
    type: 'CREATE_LIKEITEM',
    payload: likeItem,
  }
}
