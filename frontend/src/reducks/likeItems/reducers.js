import * as Actions from './actions'
import { initialState } from '../store/initialState'

export const LikeItemsReducer = (state = initialState.likeItems, action) => {
  switch (action.type) {
    case Actions.DELETE_LIKE_ITEM:
      return {
        ...state,
        list: [...action.payload],
      }
    case Actions.FETCH_LIKE_ITEMS:
      return {
        ...state,
        list: [...action.payload],
      }
    case Actions.CREATE_LIKE_ITEM:
      return {
        ...action.payload,
      }
    default:
      return state
  }
}
