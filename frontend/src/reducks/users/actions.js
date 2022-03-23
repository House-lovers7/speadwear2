export const SIGN_IN = 'SIGN_IN'
export const signInAction = (userState) => {
  return {
    type: 'SIGN_IN',
    payload: {
      isSignedIn: true,
      role: userState.role,
      uid: userState.uid,
      username: userState.username,
    },
  }
}

export const SIGN_OUT = 'SIGN_OUT'
export const signOutAction = () => {
  return {
    type: 'SIGN_OUT',
    payload: {
      isSignedIn: false,
      role: '',
      uid: '',
      username: '',
    },
  }
}
export const FETCH_USER = 'FETCH_USER'
export const fetchUserAction = () => {
  return {
    type: 'FETCH_USER',
    payload: {
      isSignedIn: false,
      role: '',
      uid: '',
      username: '',
    },
  }
}
