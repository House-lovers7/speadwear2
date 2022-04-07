import * as Actions from './actions'
import { initialState } from '../store/initialState'

export const RelationshipsReducer = (state = initialState.relationships, action) => {
  switch (action.type) {
    case Actions.DELETE_RELATIONSHIP:
      return {
        ...state,
        list: [...action.payload],
      }
    case Actions.FETCH_RELATIONSHIPS:
      return {
        ...state,
        list: [...action.payload],
      }
    case Actions.CREATE_RELATIONSHIP:
      return {
        ...action.payload,
      }
    default:
      return state
  }
}
