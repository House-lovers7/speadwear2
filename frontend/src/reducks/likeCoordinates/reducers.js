import * as Actions from './actions'
import { initialState } from '../store/initialState'

export const LikeCoordinatesReducer = (state = initialState.likeCoordinates, action) => {
  switch (action.type) {
    case Actions.DELETE_LIKE_COORDINATE:
      return {
        ...state,
        list: [...action.payload],
      }
    case Actions.FETCH_LIKE_COORDINATES:
      return {
        ...state,
        list: [...action.payload],
      }
    case Actions.CREATE_LIKE_COORDINATE:
      return {
        ...action.payload,
      }
    default:
      return state
  }
}
