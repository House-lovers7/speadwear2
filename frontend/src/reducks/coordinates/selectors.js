import { createSelector } from 'reselect'

const coordinatesSelector = (state) => state.coordinates

export const getCoordinateId = createSelector([coordinatesSelector], (state) => state.coordinateId)
export const getSeason = createSelector([coordinatesSelector], (state) => state.season)
export const getTpo = createSelector([coordinatesSelector], (state) => state.tpo)
export const getRating = createSelector([coordinatesSelector], (state) => state.rating)
export const getContent = createSelector([coordinatesSelector], (state) => state.content)
export const getSize = createSelector([coordinatesSelector], (state) => state.size)
export const getGender = createSelector([coordinatesSelector], (state) => state.gender)
export const getPrice = createSelector([coordinatesSelector], (state) => state.price)
export const getImages = createSelector([coordinatesSelector], (state) => state.images)
