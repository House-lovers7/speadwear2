import { createSelector } from 'reselect'

const itemsSelector = (state) => state.items

export const getItemId = createSelector([itemsSelector], (state) => state.itemId)
export const getSeason = createSelector([itemsSelector], (state) => state.season)
export const getTpo = createSelector([itemsSelector], (state) => state.tpo)
export const getSuperItem = createSelector([itemsSelector], (state) => state.superItem)
export const getRating = createSelector([itemsSelector], (state) => state.rating)
export const getContent = createSelector([itemsSelector], (state) => state.content)
export const getSize = createSelector([itemsSelector], (state) => state.size)
export const getGender = createSelector([itemsSelector], (state) => state.gender)
export const getPrice = createSelector([itemsSelector], (state) => state.price)
export const getImages = createSelector([itemsSelector], (state) => state.images)
