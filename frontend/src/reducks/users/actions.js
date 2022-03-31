export const SIGN_UP = 'SIGN_UP'
export const SIGN_IN = 'SIGN_IN'
export const SIGN_OUT = 'SIGN_OUT'

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
