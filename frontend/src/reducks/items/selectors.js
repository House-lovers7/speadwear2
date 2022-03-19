import { createSelector } from 'reselect'

const itemsSelector = (state) => state.items

export const getItems = createSelector([itemsSelector], (state) => state.list)

export const getOrdersHistory = createSelector([itemsSelector], (state) => state.orders)
export const getItemId = createSelector([itemsSelector], (state) => state.uid)
