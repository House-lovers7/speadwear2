import { createSelector } from 'reselect'
const coordinatesSelector = (state) => state.coordinates
export const getCoordinates = createSelector([coordinatesSelector], (state) => state.list)
export const getCoordinateId = createSelector([coordinatesSelector], (state) => state.coordinateId)
