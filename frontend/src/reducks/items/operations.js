import { db, FirebaseTimestamp } from '../../firebase/index'
import { push } from 'connected-react-router'
import axiosConverter from '../../function/axiosConverter'
import axios from 'axios'
import * as APIS from '../api/actions'
import * as URLS from '../../urls'

// import { preProcessFile } from 'typescript';
import { deleteItemAction, fetchItemsAction } from './actions'
// import {hideLoadingAction, showLoadingAction} from "../loading/actions";
// import {createPaymentIntent} from "../payments/operations"

// const itemsRef = db.collection('items')

export const fetchAllItems = (userId, itemId) => {
  const data = {
    itemId: itemId,
  }
  return (dispatch) => {
    dispatch(APIS.fetchBeginAction())
    return axiosConverter
      .get(URLS.itemIndex(userId), { data })
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
      .get(URLS.itemIndex(userId))
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

export const fetchItems = (userId, itemId) => {
  const data = {
    itemId: itemId,
  }
  return (dispatch) => {
    dispatch(APIS.fetchBeginAction())
    return axios
      .get(URLS.itemIndex(userId), { data })
      .then((response) => {
        dispatch(APIS.fetchSuccessAction(response))
        console.log(response)
        dispatch(fetchItemsAction(response.items))
      })
      .catch((error) => {
        dispatch(APIS.fetchFailureAction(error))
        console.log(error)
      })
  }
}

//idとuserIdの処理は残価代
export const createItem = (
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
    userId: userId,
    superItem: superItem,
    season: season,
    tpo: tpo,
    color: color,
    content: content,
    gender: gender,
    size: size,
    price: price,
    description: description,
    image: image,
    rating: rating,
  }
  return (dispatch) => {
    dispatch(APIS.postBeginAction())
    return axiosConverter
      .post(URLS.itemPost(1), item, { withCredentials: true })
      .then((response) => {
        dispatch(APIS.postSuccessAction(response))
        console.log(response)
        return response
      })
      .catch((error) => {
        dispatch(APIS.postFailureAction(error))
        console.log(error)
      })
  }
}

//pushで画面遷移するだけでいいのでは？
export const newItem = (userId, itemId) => {
  return (dispatch) => {
    dispatch(APIS.fetchBeginAction())
    return axios
      .get(URLS.itemNew(userId))
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

//pushで画面遷移するだけでいいのでは？
export const editItem = (userId, itemId) => {
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

  return (dispatch) => {
    dispatch(APIS.patchBeginAction())
    return axios
      .patch(URLS.itemPost(userId), data)
      .then((response) => {
        dispatch(APIS.patchSuccessAction(response))
        console.log(response)
        return response
      })
      .catch((error) => {
        dispatch(APIS.patchFailureAction(error))
        console.log(error)
      })
  }
}

export const deleteItem = (userId, itemId) => {
  const data = {
    itemId: itemId,
  }
  return (dispatch) => {
    dispatch(APIS.deleteBeginAction())
    return axios
      .delete(URLS.itemIndex(userId), { data })
      .then((response) => {
        dispatch(APIS.deleteSuccessAction(response))
        console.log(response)
        return response
      })
      .catch((error) => {
        dispatch(APIS.deleteFailureAction(error))
        console.log(error)
      })
  }
}
