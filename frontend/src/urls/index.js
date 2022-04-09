//railsのconfig.route.rb決定後にきまる
const DEFAULT_API_LOCALHOST = 'http://localhost:3001/api/v1'
//User
export const userIndex = (userId) => `${DEFAULT_API_LOCALHOST}/users/${userId}`
export const userDefault = () => `${DEFAULT_API_LOCALHOST}/users/`

export const signUp = () => `${DEFAULT_API_LOCALHOST}/signup`
//Item
export const itemIndex = (userId, itemId) => `${DEFAULT_API_LOCALHOST}/users/${userId}/items/${itemId}`
export const itemDefault = (userId) => `${DEFAULT_API_LOCALHOST}/users/${userId}/items`
//Coordinate
export const coordinateIndex = (userId, coordinateId) =>
  `${DEFAULT_API_LOCALHOST}/users/${userId}/coordinates/${coordinateId}`
export const coordinateDefault = (userId) => `${DEFAULT_API_LOCALHOST}/users/${userId}/coordinates`
//Relationship
export const folllowerIndex = (userId, followerId) => `${DEFAULT_API_LOCALHOST}/users/${userId}/followers/${followerId}`
export const followingIndex = (userId, followingId) =>
  `${DEFAULT_API_LOCALHOST}/users/${userId}/following/${followingId}`
//CommentCoordinate
export const commentCoordinateIndex = (userId, coordinateId, commentId) =>
  `${DEFAULT_API_LOCALHOST}/users/${userId}/coordinates/${coordinateId}/comments/${commentId}`
export const commentCoordinateDefault = (userId, coordinateId) =>
  `${DEFAULT_API_LOCALHOST}/users/${userId}/coordinates/${coordinateId}/comments`
//CommentItem
export const commentItemIndex = (userId, itemId, commentId) =>
  `${DEFAULT_API_LOCALHOST}/users/${userId}/items/${itemId}/comments/${commentId}`
export const commentItemDefault = (userId, itemId) =>
  `${DEFAULT_API_LOCALHOST}/users/${userId}/items/${itemId}/comments`
//LikeItem
export const likeItemIndex = (userId, itemId, likeItemId) =>
  `${DEFAULT_API_LOCALHOST}/users/${userId}/items/${itemId}/likeItems/${likeItemId}`
export const likeItemDefault = (userId, itemId) => `${DEFAULT_API_LOCALHOST}/users/${userId}/items/${itemId}/likeItems`
//LikeCoordinate
export const likeCoordinateIndex = (userId, coordinateId, likeCoordinateId) =>
  `${DEFAULT_API_LOCALHOST}/users/${userId}/coordinates/${coordinateId}/likeCoordinates/${likeCoordinateId}`
export const likeCoordinateDefault = (userId, coordinateId) =>
  `${DEFAULT_API_LOCALHOST}/users/${userId}/coordinates/${coordinateId}/likeCoordinates`

export const allItems = `${DEFAULT_API_LOCALHOST}/items/all`
export const allCoordinates = `${DEFAULT_API_LOCALHOST}/coordinates/all`
export const lineFoodsReplace = `${DEFAULT_API_LOCALHOST}/line_foods/replace`
export const orders = `${DEFAULT_API_LOCALHOST}/orders`
