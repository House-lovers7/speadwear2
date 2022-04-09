import * as Actions from './actions'
import { initialState } from '../store/initialState'

export const CommentsReducer = (state = initialState.comments, action) => {
  switch (action.type) {
    case Actions.DELETE_ITEM_COMMENT:
      return {
        ...state,
        ...action.payload,
      }
    case Actions.FETCH_ITEM_COMMENTS:
      return {
        ...state,
        ...action.payload,
      }
    case Actions.CREATE_ITEM_COMMENT:
      return {
        ...action.payload,
      }
    case Actions.DELETE_COORDINATE_COMMENT:
      return {
        ...state,
        list: [...action.payload],
      }
    case Actions.FETCH_COORDINATE_COMMENTS:
      return {
        ...state,
        list: [...action.payload],
      }
    case Actions.CREATE_COORDINATE_COMMENT:
      return {
        ...action.payload,
      }
    default:
      return state
  }
}
