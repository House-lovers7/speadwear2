import { createSelector } from 'reselect'

const likeItemsSelector = (state) => state.items

export const getLikeItems = createSelector([likeItemsSelector], (state) => state.list)
export const getLikeItemId = createSelector([likeItemsSelector], (state) => state.itemId)
