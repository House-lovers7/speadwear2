import * as Actions from './actions'
import { initialState } from '../store/initialState'

export const LikeCoordinatesReducer = (state = initialState.likeCoordinates, action) => {
  switch (action.type) {
    case Actions.DELETE_LIKECOORDINATE:
      return {
        ...state,
        list: [...action.payload],
      }
    case Actions.FETCH_LIKECOORDINATES:
      return {
        ...state,
        list: [...action.payload],
      }
    case Actions.CREATE_LIKECOORDINATE:
      return {
        ...action.payload,
      }
    default:
      return state
  }
}
