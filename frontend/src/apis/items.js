import axios from 'axios'
import * as URLS from '../urls'

export const fetchItem = (itemId) => {
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
      result = { status: error.response.status, data: error.response }
      setIsLoading(false)
    })
  return result
}

export const indexItem = (userId, itemId) => {
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
      result = { status: error.response.status, data: error.response }
      setIsLoading(false)
    })
  return result
}

export const newItem = (userId) => {
  axios
    .get(URLS.itemNew(userId))
    .then((response) => {
      result = { status: response.status, data: response.data }
      setReportData(result.data)
      setIsLoading(false)
    })
    .catch((error) => {
      result = { status: error.response.status, data: error.response }
      setIsLoading(false)
    })
  return result
}

export const showItem = (userId, itemId) => {
  axios
    .get(URLS.itemShow(userId, itemId))
    .then((response) => {
      result = { status: response.status, data: response.data }
      setReportData(result.data)
      setIsLoading(false)
    })
    .catch((error) => {
      result = { status: error.response.status, data: error.response }
      setIsLoading(false)
    })
  return result
}

export const editItem = (userId, itemId) => {
  axios
    .get(URLS.itemEdit(userId, itemId))
    .then((response) => {
      result = { status: response.status, data: response.data }
      setReportData(result.data)
      setIsLoading(false)
    })
    .catch((error) => {
      result = { status: error.response.status, data: error.response }
      setIsLoading(false)
    })
  return result
}

export const createItem = async (id, userId, superItem, season, tpo, rating, color, description, image, content) => {
  const data = {
    id: id,
    userId: userId,
    superItem: superItem,
    season: season,
    tpo: tpo,
    rating: rating,
    color: color,
    description: description,
    image: image,
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
      result = { status: error.response.status, data: error.response }
      setIsLoading(false)
    })
  return result
}

export const updateItem = async (id, userId, superItem, season, tpo, rating, color, description, image, content) => {
  const data = {
    id: id,
    userId: userId,
    superItem: superItem,
    season: season,
    tpo: tpo,
    rating: rating,
    color: color,
    description: description,
    image: image,
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
      result = { status: error.response.status, data: error.response }
      setIsLoading(false)
    })
  return result
}

export const deleteItem = (userId, itemId) => {
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
      result = { status: error.response.status, data: error.response }
      setIsLoading(false)
    })
  return result
}
