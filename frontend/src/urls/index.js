//railsのconfig.route.rb決定後にきまる
const DEFAULT_API_LOCALHOST = 'http://localhost:3000/api/v1'

export const usersIndex = (userId) => `${DEFAULT_API_LOCALHOST}/users/${userId}`
export const itemsIndex = (userId, itemId) => `${DEFAULT_API_LOCALHOST}/users/${userId}/items/${itemId}`
export const coordinatesIndex = (userId, coordinateId) =>
  `${DEFAULT_API_LOCALHOST}/users/${userId}/coordinates/${coordinateId}`

export const folllowersIndex = (userId, followerId) => `${DEFAULT_API_LOCALHOST}/users/${userId}/items/${followerId}`
export const followingsIndex = (userId, followingId) => `${DEFAULT_API_LOCALHOST}/users/${userId}/items/${followingId}`

export const allItems = `${DEFAULT_API_LOCALHOST}/items/all`
export const allCoordinates = `${DEFAULT_API_LOCALHOST}/coordinates/all`
export const lineFoodsReplace = `${DEFAULT_API_LOCALHOST}/line_foods/replace`
export const orders = `${DEFAULT_API_LOCALHOST}/orders`
