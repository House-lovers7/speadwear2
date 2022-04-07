import { createSelector } from 'reselect'
const relationshipsSelector = (state) => state.followers
export const getRelationships = createSelector([relationshipsSelector], (state) => state.list)
