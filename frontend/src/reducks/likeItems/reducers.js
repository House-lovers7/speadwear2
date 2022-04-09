import * as Actions from './actions'
import { initialState } from '../store/initialState'

export const LikeItemsReducer = (state = initialState.likeItems, action) => {
  switch (action.type) {
    case Actions.DELETE_LIKEITEM:
      return {
        ...state,
        list: [...action.payload],
      }
    case Actions.FETCH_LIKEITEMS:
      return {
        ...state,
        list: [...action.payload],
      }
    case Actions.CREATE_LIKEITEM:
      return {
        ...action.payload,
      }
    default:
      return state
  }
}
