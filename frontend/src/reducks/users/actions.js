export const SIGN_UP = 'SIGN_UP'
export const SIGN_IN = 'SIGN_IN'
export const SIGN_OUT = 'SIGN_OUT'
export const DELETE_USER = 'DELETE_USER'
export const FETCH_USERS = 'FETCH_USERS'
export const CREATE_USER = 'CREATE_USER'

export const signUpAction = (userState) => {
  return {
    type: 'SIGN_UP',
    payload: {
      isSignedIn: true,
      id: userState.id,
      username: userState.username,
      admin: userState.admin,
    },
  }
}

export const signInAction = (userState) => {
  return {
    type: 'SIGN_IN',
    payload: {
      isSignedIn: true,
      id: userState.id,
      username: userState.username,
      admin: userState.admin,
    },
  }
}

export const signOutAction = () => {
  return {
    type: 'SIGN_OUT',
    payload: {
      isSignedIn: false,
      id: '',
      username: '',
      admin: false,
    },
  }
}

export const deleteUserAction = (user) => {
  return {
    type: 'DELETE_USER',
    payload: user,
  }
}

export const fetchUsersAction = (users) => {
  return {
    type: 'FETCH_USERS',
    payload: users,
  }
}

export const createUserAction = (user) => {
  return {
    type: 'CREATE_User',
    payload: user,
  }
}
