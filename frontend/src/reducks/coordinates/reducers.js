import * as Actions from './actions'
import { initialState } from '../store/initialState'

export const CoordinatesReducer = (state = initialState.coordinates, action) => {
  switch (action.type) {
    case Actions.DELETE_COORDINATE:
      return {
        ...state,
        list: [...action.payload],
      }
    case Actions.FETCH_COORDINATE:
      return {
        ...state,
        list: [...action.payload],
      }
    default:
      return state
  }
}
