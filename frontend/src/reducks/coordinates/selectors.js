import { createSelector } from 'reselect'

const coordinatesSelector = (state) => state.coordinates

export const getCoordinates = createSelector([coordinatesSelector], (state) => state.list)
export const getOrdersHistory = createSelector([coordinatesSelector], (state) => state.orders)
export const getCoordinateId = createSelector([coordinatesSelector], (state) => state.uid)
