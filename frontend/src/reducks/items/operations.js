import { push } from 'connected-react-router'

import axios from 'axios'
import * as APIS from '../api/actions'
import * as URLS from '../../urls'
import axiosConverter from '../../function/axiosConverter'

// import { preProcessFile } from 'typescript';
import { deleteItemAction, fetchItemsAction, createItemAction, updateItemAction } from './actions'
// import {hideLoadingAction, showLoadingAction} from "../loading/actions";
// import {createPaymentIntent} from "../payments/operations"

export const fetchAllItems = (userId, itemId) => {
  const data = {
    itemId: itemId,
  }
  return (dispatch) => {
    dispatch(APIS.fetchBeginAction())
    return axios
      .get(URLS.itemIndex(userId), { data }, { credentials: true })
      .then((response) => {
        dispatch(APIS.fetchSuccessAction(response))
        console.log(response)
        dispatch(fetchItemsAction(response.data.items))
        console.log(response.data.items)
        return response.data.items
      })
      .catch((error) => {
        dispatch(APIS.fetchFailureAction(error))
        console.log(error)
      })
  }
}

export const fetchSingleItem = (userId) => {
  return (dispatch) => {
    dispatch(APIS.fetchBeginAction())
    return axiosConverter
      .get(URLS.itemDefault(userId))
      .then((response) => {
        dispatch(APIS.fetchSuccessAction(response))
        console.log(response)
        dispatch(fetchItemsAction(response.data.items))
        console.log(response.data.items)
        return response.data.items
      })
      .catch((error) => {
        dispatch(APIS.fetchFailureAction(error))
        console.log(error)
      })
  }
}

//idとuserIdの処理は残価代
export const createItem = (
  // id,
  userId,
  superItem,
  season,
  tpo,
  color,
  content,
  gender,
  size,
  price,
  description,
  image,
  rating
) => {
  const item = {
    // id: id,
    user_id: userId,
    super_item: superItem,
    season: season,
    tpo: tpo,
    // color: color,
    color: 1,
    content: content,
    gender: gender,
    size: size,
    price: price,
    description: description,
    item_image: image,
    rating: rating,
  }
  return (dispatch) => {
    dispatch(APIS.postBeginAction())
    return axios
      .post(URLS.itemDefault(userId), item)
      .then((response) => {
        dispatch(APIS.postSuccessAction(response))
        console.log(response)
        dispatch(createItemAction(response.data.items))
        console.log(response.data.items)
        return response.data.items
      })
      .catch((error) => {
        dispatch(APIS.postFailureAction(error))
        console.log(error)
      })
  }
}

//idとuserIdの処理は残価代
export const updateItem = (
  userId,
  superItem,
  season,
  tpo,
  color,
  content,
  gender,
  size,
  price,
  description,
  image,
  rating
) => {
  const item = {
    // id: id,
    user_id: userId,
    super_item: superItem,
    season: season,
    tpo: tpo,
    color: color,
    content: content,
    gender: gender,
    size: size,
    price: price,
    description: description,
    item_image: image,
    rating: rating,
  }
  return (dispatch) => {
    dispatch(APIS.putBeginAction())
    return axios
      .put(URLS.itemIndex(userId), item, { credentials: true })
      .then((response) => {
        dispatch(APIS.putSuccessAction(response))
        console.log(response)
        dispatch(updateItemAction(response.data.items))
        console.log(response.data.items)
        return response.data.items
      })
      .catch((error) => {
        dispatch(APIS.putFailureAction(error))
        console.log(error)
      })
  }
}

//pushで画面遷移するだけでいいのでは？
export const showItem = (userId, itemId) => {
  return (dispatch) => {
    dispatch(APIS.fetchBeginAction())
    return axios
      .get(URLS.itemIndex(userId))
      .then((response) => {
        dispatch(APIS.fetchSuccessAction(response))
        console.log(response)
        return response
      })
      .catch((error) => {
        dispatch(APIS.fetchFailureAction(error))
        console.log(error)
      })
  }
}

export const deleteItem = (userId, itemId) => {
  return (dispatch) => {
    dispatch(APIS.deleteBeginAction())
    return axios
      .delete(URLS.itemIndex(userId, itemId), { credentials: true })
      .then((response) => {
        dispatch(APIS.deleteSuccessAction(response))
        console.log(response)
        dispatch(deleteItemAction(response.status))
        console.log(response.status)
        return response.status
      })
      .catch((error) => {
        dispatch(APIS.deleteFailureAction(error))
        console.log(error)
      })
  }
}
