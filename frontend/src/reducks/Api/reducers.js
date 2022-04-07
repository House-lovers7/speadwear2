import * as Actions from './actions'
import { initialState } from '../store/initialState'

export const ApisReducer = (state = initialState.users, action) => {
  switch (action.type) {
    case Actions.FETCH_BEGIN:
    case Actions.FETCH_SUCCESS:
    case Actions.FETCH_FAILURE:
    case Actions.POST_BEGIN:
    case Actions.POST_SUCCESS:
    case Actions.POST_FAILURE:
    case Actions.PUT_BEGIN:
    case Actions.PUT_SUCCESS:
    case Actions.PUT_FAILURE:
    case Actions.DELETE_BEGIN:
    case Actions.DELETE_SUCCESS:
    case Actions.DELETE_FAILURE:
      return {
        ...state,
        ...action.payload,
      }
    default:
      return state
  }
}
