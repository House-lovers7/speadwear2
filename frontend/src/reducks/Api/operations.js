import * as Actions from './actions'
import * as URLS from '../../urls'
import axios from 'axios'

// import { hideLoadingAction, showLoadingAction } from '../loading/actions'

export const fetchUser = (userId) => {
  const data = {}
  return (dispatch) => {
    dispatch(Actions.fetchBeginAction())
    return axios
      .get(URLS.userIndex(userId), { data })
      .then((response) => {
        dispatch(Actions.fetchSuccessAction(response.data))
        console.log(response.data)
        return response.data
      })
      .catch((error) => {
        dispatch(Actions.fetchFailureAction(error))
        console.log(error)
      })
  }
}

export const fetchItem = (userId, itemId) => {
  const data = {
    itemId: itemId,
  }
  return (dispatch) => {
    dispatch(Actions.fetchBeginAction())
    return axios
      .get(URLS.itemIndex(userId), { data })
      .then((response) => {
        dispatch(Actions.fetchSuccessAction(response.data))
        console.log(response.data)
        return response.data
      })
      .catch((error) => {
        dispatch(Actions.fetchFailureAction(error))
        console.log(error)
      })
  }
}

//pushで画面遷移するだけでいいのでは？
export const newItem = (userId, itemId) => {
  return (dispatch) => {
    dispatch(Actions.fetchBeginAction())
    return axios
      .get(URLS.itemNew(userId))
      .then((response) => {
        dispatch(Actions.fetchSuccessAction(response.data))
        console.log(response.data)
        return response.data
      })
      .catch((error) => {
        dispatch(Actions.fetchFailureAction(error))
        console.log(error)
      })
  }
}

//pushで画面遷移するだけでいいのでは？
export const showItem = (userId, itemId) => {
  return (dispatch) => {
    dispatch(Actions.fetchBeginAction())
    return axios
      .get(URLS.itemShow(userId))
      .then((response) => {
        dispatch(Actions.fetchSuccessAction(response.data))
        console.log(response.data)
        return response.data
      })
      .catch((error) => {
        dispatch(Actions.fetchFailureAction(error))
        console.log(error)
      })
  }
}

//pushで画面遷移するだけでいいのでは？
export const editItem = (userId, itemId) => {
  return (dispatch) => {
    dispatch(Actions.fetchBeginAction())
    return axios
      .get(URLS.itemShow(userId))
      .then((response) => {
        dispatch(Actions.fetchSuccessAction(response.data))
        console.log(response.data)
        return response.data
      })
      .catch((error) => {
        dispatch(Actions.fetchFailureAction(error))
        console.log(error)
      })
  }
}

export const createItem = async (id, userId, superItem, season, tpo, rating, color, memo, picture, content) => {
  const data = {
    id: id,
    userId: userId,
    superItem: superItem,
    season: season,
    tpo: tpo,
    rating: rating,
    color: color,
    memo: memo,
    picture: picture,
    content: content,
  }

  return (dispatch) => {
    dispatch(Actions.postBeginAction())
    return axios
      .post(URLS.itemPost(userId), data)
      .then((response) => {
        dispatch(Actions.postSuccessAction(response.data))
        console.log(response.data)
        return response.data
      })
      .catch((error) => {
        dispatch(Actions.postFailureAction(error))
        console.log(error)
      })
  }
}

export const updateItem = async (id, userId, superItem, season, tpo, rating, color, memo, picture, content) => {
  const data = {
    id: id,
    userId: userId,
    superItem: superItem,
    season: season,
    tpo: tpo,
    rating: rating,
    color: color,
    memo: memo,
    picture: picture,
    content: content,
  }

  return (dispatch) => {
    dispatch(Actions.patchBeginAction())
    return axios
      .patch(URLS.itemPost(userId), data)
      .then((response) => {
        dispatch(Actions.patchSuccessAction(response.data))
        console.log(response.data)
        return response.data
      })
      .catch((error) => {
        dispatch(Actions.patchFailureAction(error))
        console.log(error)
      })
  }
}

export const deleteItem = (userId, itemId) => {
  const data = {
    itemId: itemId,
  }
  return (dispatch) => {
    dispatch(Actions.deleteBeginAction())
    return axios
      .delete(URLS.itemIndex(userId), { data })
      .then((response) => {
        dispatch(Actions.deleteSuccessAction(response.data))
        console.log(response.data)
        return response.data
      })
      .catch((error) => {
        dispatch(Actions.deleteFailureAction(error))
        console.log(error)
      })
  }
}

export const fetchCoordinate = (userId, itemId, CoordinateId) => {
  const data = {
    itemId: itemId,
    CoordinateId: CoordinateId,
  }
  return (dispatch) => {
    dispatch(Actions.fetchBeginAction())
    return axios
      .get(URLS.coordinateIndex(userId), { data })
      .then((response) => {
        dispatch(Actions.fetchSuccessAction(response.data))
        console.log(response.data)
        return response.data
      })
      .catch((error) => {
        dispatch(Actions.fetchFailureAction(error))
        console.log(error)
      })
  }
}
