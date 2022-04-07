import * as Actions from './actions'
import { initialState } from '../store/initialState'

export const CommentsReducer = (state = initialState.comments, action) => {
  switch (action.type) {
    case Actions.DELETE_COMMENT:
      return {
        ...state,
        list: [...action.payload],
      }
    case Actions.FETCH_COMMENTS:
      return {
        ...state,
        list: [...action.payload],
      }
    case Actions.CREATE_COMMENT:
      return {
        ...action.payload,
      }

    default:
      return state
  }
}
