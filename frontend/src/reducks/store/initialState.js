export const initialState = {
  items: {
    list: [],
  },
  coordinates: {
    list: [],
  },
  users: {
    isSignedIn: false,
    orders: [],
    role: '',
    uid: '',
    username: '',
  },
  fetchUser: {
    users: [],
    items: [],
    coordinates: [],
    loading: '',
    error: '',
  },
}
