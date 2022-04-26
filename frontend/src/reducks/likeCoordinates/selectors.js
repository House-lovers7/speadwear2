import { createSelector } from 'reselect'
const likeCoordinatesSelector = (state) => state.likeCoordinates
export const getLikeCoordinates = createSelector([likeCoordinatesSelector], (state) => state.list)
