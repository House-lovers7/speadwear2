import { createSelector } from 'reselect'
const relationshipsSelector = (state) => state.relationships
export const getRelationships = createSelector([relationshipsSelector], (state) => state.list)
