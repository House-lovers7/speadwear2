//railsのconfig.route.rb決定後にきまる
const DEFAULT_API_LOCALHOST = 'http://localhost:3001/api/v1'
//User
export const userIndex = (userId) => `${DEFAULT_API_LOCALHOST}/users/${userId}`
export const userPost = () => `${DEFAULT_API_LOCALHOST}/users/`
export const userDelete = (userId) => `${DEFAULT_API_LOCALHOST}/users/${userId}`

export const signUp = () => `${DEFAULT_API_LOCALHOST}/signup`
//Item
export const itemIndex = (userId) => `${DEFAULT_API_LOCALHOST}/users/${userId}/items`
export const itemNew = (userId) => `${DEFAULT_API_LOCALHOST}/users/${userId}/items/new`
export const itemPost = (userId) => `${DEFAULT_API_LOCALHOST}/users/${userId}/items`
export const item = (userId, itemId) => `${DEFAULT_API_LOCALHOST}/users/${userId}/items/${itemId}`
export const itemUpdate = (userId, itemId) => `${DEFAULT_API_LOCALHOST}/users/${userId}/items/${itemId}`
export const itemDelete = (userId, itemId) => `${DEFAULT_API_LOCALHOST}/users/${userId}/items/${itemId}`
//Coordinate
export const coordinateIndex = (userId) => `${DEFAULT_API_LOCALHOST}/users/${userId}/coordinates`
export const coordinateNew = (userId) => `${DEFAULT_API_LOCALHOST}/users/${userId}/coordinates/new`
export const coordinatePost = (userId) => `${DEFAULT_API_LOCALHOST}/users/${userId}/coordinates`
export const coordinate = (userId, coordinateId) =>
  `${DEFAULT_API_LOCALHOST}/users/${userId}/coordinates/${coordinateId}`
export const coordinateEdit = (userId, coordinateId) =>
  `${DEFAULT_API_LOCALHOST}/users/${userId}/coordinates/${coordinateId}/edit`
export const coordinateUpdate = (userId, coordinateId) =>
  `${DEFAULT_API_LOCALHOST}/users/${userId}/coordinates/${coordinateId}`
export const coordinateDelete = (userId, coordinateId) =>
  `${DEFAULT_API_LOCALHOST}/users/${userId}/coordinates/${coordinateId}`
//Relationship
export const folllowerIndex = (userId, followerId) => `${DEFAULT_API_LOCALHOST}/users/${userId}/followers/${followerId}`
export const followingIndex = (userId, followingId) =>
  `${DEFAULT_API_LOCALHOST}/users/${userId}/following/${followingId}`
//Comment
export const commentItemPost = (userId, itemId) =>
  `${DEFAULT_API_LOCALHOST}/users/${userId}/coordinates/${itemId}/comments`
export const commentCoordinatePost = (userId, coordinateId) =>
  `${DEFAULT_API_LOCALHOST}/users/${userId}/coordinates/${coordinateId}/comments`

export const allItems = `${DEFAULT_API_LOCALHOST}/items/all`
export const allCoordinates = `${DEFAULT_API_LOCALHOST}/coordinates/all`
export const lineFoodsReplace = `${DEFAULT_API_LOCALHOST}/line_foods/replace`
export const orders = `${DEFAULT_API_LOCALHOST}/orders`
