//railsのconfig.route.rb決定後にきまる
const DEFAULT_API_LOCALHOST = 'http://localhost:3000/api/v1'

export const userIndex = (userId) => `${DEFAULT_API_LOCALHOST}/users/${userId}`
export const userPost = () => `${DEFAULT_API_LOCALHOST}/users/`

export const itemIndex = (userId) => `${DEFAULT_API_LOCALHOST}/users/${userId}/items`
export const itemNew = (userId) => `${DEFAULT_API_LOCALHOST}/users/${userId}/items/new`
export const itemPost = (userId) => `${DEFAULT_API_LOCALHOST}/users/${userId}/items`
export const itemShow = (userId, itemId) => `${DEFAULT_API_LOCALHOST}/users/${userId}/items/${itemId}`
// export const itemIndex = (userId, itemId) => `${DEFAULT_API_LOCALHOST}/users/${userId}/items/${itemId}`
export const itemEdit = (userId, itemId) => `${DEFAULT_API_LOCALHOST}/users/${userId}/items/${itemId}/edit`
export const itemUpdate = (userId, itemId) => `${DEFAULT_API_LOCALHOST}/users/${userId}/items/${itemId}`
export const itemDelete = (userId, itemId) => `${DEFAULT_API_LOCALHOST}/users/${userId}/items/${itemId}`

export const coordinateIndex = (userId, coordinateId) =>
  `${DEFAULT_API_LOCALHOST}/users/${userId}/coordinates/${coordinateId}`

export const folllowerIndex = (userId, followerId) => `${DEFAULT_API_LOCALHOST}/users/${userId}/followers/${followerId}`

export const followingIndex = (userId, followingId) =>
  `${DEFAULT_API_LOCALHOST}/users/${userId}/following/${followingId}`

export const allItems = `${DEFAULT_API_LOCALHOST}/items/all`
export const allCoordinates = `${DEFAULT_API_LOCALHOST}/coordinates/all`
export const lineFoodsReplace = `${DEFAULT_API_LOCALHOST}/line_foods/replace`
export const orders = `${DEFAULT_API_LOCALHOST}/orders`
