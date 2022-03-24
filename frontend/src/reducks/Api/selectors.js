import { createSelector } from 'reselect'

const usersSelector = (state) => state.fetchUser

export const getIsSignedIn = createSelector([usersSelector], (state) => state.isSignedIn)
