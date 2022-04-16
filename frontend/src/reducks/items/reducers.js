import * as Actions from './actions'
import { initialState } from '../store/initialState'

export const ItemsReducer = (state = initialState.items, action) => {
  switch (action.type) {
    case Actions.DELETE_ITEM:
      return {
        ...state,
        ...action.payload,
      }
    case Actions.SEARCH_ITEMS:
      return {
        ...action.payload,
      }
    case Actions.FETCH_ITEMS:
      return {
        ...state,
        list: [...action.payload],
      }
    case Actions.CREATE_ITEM:
      return {
        ...action.payload,
      }
    default:
      return state
  }
}
