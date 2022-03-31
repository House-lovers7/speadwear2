import * as Actions from './actions'
import { initialState } from '../store/initialState'

export const UsersReducer = (state = initialState.users, action) => {
  switch (action.type) {
    case Actions.SIGN_UP:
      return {
        ...state,
        ...action.payload,
      }
    case Actions.SIGN_IN:
      return {
        ...state,
        ...action.payload,
      }
    case Actions.SIGN_OUT:
      return {
        ...action.payload,
      }
    case Actions.DELETE_USER:
      return {
        ...state,
        list: [...action.payload],
      }
    case Actions.FETCH_USERS:
      return {
        ...state,
        list: [...action.payload],
      }
    case Actions.CREATE_USER:
      return {
        ...action.payload,
      }
    // case Actions.ADD_USER:
    //   return {
    //     ...state,
    //     users: [...state.users, ...action.payload],
    //   }
    // case Actions.REMOVE_USER:
    //   return {
    //     ...state,
    //     users: state.users.filter((user) => parseInt(user.id, 10) !== parseInt(action.payload, 10)),
    //   }
    default:
      return state
  }
}
