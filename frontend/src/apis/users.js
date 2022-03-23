import axios from 'axios'
import * as URLS from '../urls'

export const fetchUser = (userId, itemId) => {
  const data = {
    itemId: itemId,
  }

  axios
    .get(URLS.itemIndex(userId), { data })
    .then((response) => {
      result = { status: response.status, data: response.data }
    })
    .catch((error) => {
      // result = { status: error.response.status, data: error.response.data }
    })
  return
}

export const indexUser = (userId, itemId) => {
  const data = {
    itemId: itemId,
  }

  axios
    .get(URLS.itemIndex(userId), { data })
    .then((response) => {
      result = { status: response.status, data: response.data }
      setReportData(result.data)
      setIsLoading(false)
    })
    .catch((error) => {
      result = { status: error.response.status, data: error.response.data }
      setIsLoading(false)
    })
  return result
}

export const newUser = (userId) => {
  axios
    .get(URLS.itemNew(userId))
    .then((response) => {
      result = { status: response.status, data: response.data }
      setReportData(result.data)
      setIsLoading(false)
    })
    .catch((error) => {
      result = { status: error.response.status, data: error.response.data }
      setIsLoading(false)
    })
  return result
}

export const showUser = (userId, itemId) => {
  axios
    .get(URLS.itemShow(userId, itemId))
    .then((response) => {
      result = { status: response.status, data: response.data }
      setReportData(result.data)
      setIsLoading(false)
    })
    .catch((error) => {
      result = { status: error.response.status, data: error.response.data }
      setIsLoading(false)
    })
  return result
}

export const editUser = (userId, itemId) => {
  axios
    .get(URLS.itemEdit(userId, itemId))
    .then((response) => {
      result = { status: response.status, data: response.data }
      setReportData(result.data)
      setIsLoading(false)
    })
    .catch((error) => {
      result = { status: error.response.status, data: error.response.data }
      setIsLoading(false)
    })
  return result
}

export const createUser = async (id, userId, superUser, season, tpo, rating, color, memo, picture, content) => {
  const data = {
    id: id,
    userId: userId,
    superUser: superUser,
    season: season,
    tpo: tpo,
    rating: rating,
    color: color,
    memo: memo,
    picture: picture,
    content: content,
  }

  let result = {}
  setIsLoading(true)
  await axios
    .post(URLS.itemPost(userId), data)
    .then((response) => {
      result = { status: response.status, data: response.data }
      setReportData(result.data)
      setIsLoading(false)
    })
    .catch((error) => {
      result = { status: error.response.status, data: error.response.data }
      setIsLoading(false)
    })
  return result
}

export const updateUser = async (id, userId, superUser, season, tpo, rating, color, memo, picture, content) => {
  const data = {
    id: id,
    userId: userId,
    superUser: superUser,
    season: season,
    tpo: tpo,
    rating: rating,
    color: color,
    memo: memo,
    picture: picture,
    content: content,
  }

  let result = {}
  setIsLoading(true)
  await axios
    .patch(URLS.itemPost(userId), data)
    .then((response) => {
      result = { status: response.status, data: response.data }
      setReportData(result.data)
      setIsLoading(false)
    })
    .catch((error) => {
      result = { status: error.response.status, data: error.response.data }
      setIsLoading(false)
    })
  return result
}

export const deleteUser = (userId, itemId) => {
  const data = {
    itemId: itemId,
  }

  axios
    .delete(URLS.itemIndex(userId), { data })
    .then((response) => {
      result = { status: response.status, data: response.data }
      setReportData(result.data)
      setIsLoading(false)
    })
    .catch((error) => {
      result = { status: error.response.status, data: error.response.data }
      setIsLoading(false)
    })
  return result
}
