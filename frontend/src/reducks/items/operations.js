import { db, FirebaseTimestamp } from '../../firebase/index'
import { push } from 'connected-react-router'
import axios from 'axios'
import * as APIS from '../api/actions'
import * as URLS from '../../urls'

// import { preProcessFile } from 'typescript';
import { deleteItemAction, fetchItemsAction, fetchItemAction } from './actions'
// import {hideLoadingAction, showLoadingAction} from "../loading/actions";
// import {createPaymentIntent} from "../payments/operations"

// const itemsRef = db.collection('items')

// export const fetchItems = () => {
//   return async (dispatch) => {
//     let query = itemsRef.orderBy('updated_at', 'desc');
//     query = (gender !== "") ? query.where('gender', '==', gender) : query;
//     query = (category !== "") ? query.where('category', '==', category) : query;

//     query.get()
//     itemsRef
//       .orderBy('updated_at', 'desc')
//       .get()
//       .then((snapshots) => {
//         const itemList = []
//         snapshots.forEach((snapshot) => {
//           const item = snapshot.data()
//           itemList.push(item)
//         })
//         dispatch(fetchItemsAction(itemList))
//       })
//   }
// }

export const fetchItem = (userId, itemId) => {
  const data = {
    itemId: itemId,
  }
  return (dispatch) => {
    dispatch(APIS.fetchBeginAction())
    return axios
      .get(URLS.itemShow(userId, itemId))
      .then((response) => {
        dispatch(APIS.fetchSuccessAction(response.data))
        console.log(response.data)
        dispatch(fetchItemAction(response.data.item))
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
        dispatch(APIS.fetchSuccessAction(response.data))
        console.log(response.data)
        dispatch(fetchItemsAction(response.data.items))
      })
      .catch((error) => {
        dispatch(APIS.fetchFailureAction(error))
        console.log(error)
      })
  }
}

export const createItem = (
  id,
  uid,
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
  const data = {
    id: id,
    superItem: superItem,
    season: season,
    tpo: tpo,
    gender: gender,
    size: size,
    price: price,
    // color: color,
    description: description,
    image: image,
    content: content,
    rating: rating,
  }

  return (dispatch) => {
    dispatch(APIS.postBeginAction())
    return axios
      .post(URLS.itemPost(1), data)
      .then((response) => {
        dispatch(APIS.postSuccessAction(response.data))
        console.log(response.data)
        return response.data
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
        dispatch(APIS.fetchSuccessAction(response.data))
        console.log(response.data)
        return response.data
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
      .get(URLS.itemShow(userId))
      .then((response) => {
        dispatch(APIS.fetchSuccessAction(response.data))
        console.log(response.data)
        return response.data
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
      .get(URLS.itemShow(userId))
      .then((response) => {
        dispatch(APIS.fetchSuccessAction(response.data))
        console.log(response.data)
        return response.data
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
        dispatch(APIS.patchSuccessAction(response.data))
        console.log(response.data)
        return response.data
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
        dispatch(APIS.deleteSuccessAction(response.data))
        console.log(response.data)
        return response.data
      })
      .catch((error) => {
        dispatch(APIS.deleteFailureAction(error))
        console.log(error)
      })
  }
}
