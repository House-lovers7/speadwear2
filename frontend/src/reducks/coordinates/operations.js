import { db, FirebaseTimestamp } from '../../firebase/index'
import { push } from 'connected-react-router'
// import { preProcessFile } from 'typescript';
import { deleteCoordinateAction, fetchCordinatesAction } from './actions'
// import {hideLoadingAction, showLoadingAction} from "../loading/actions";
// import {createPaymentIntent} from "../payments/operations"

const itemsRef = db.collection('items')

export const fetchCoordinates = () => {
  return async (dispatch) => {
    // let query = itemsRef.orderBy('updated_at', 'desc');
    // query = (gender !== "") ? query.where('gender', '==', gender) : query;
    // query = (category !== "") ? query.where('category', '==', category) : query;

    // query.get()
    itemsRef
      .orderBy('updated_at', 'desc')
      .get()
      .then((snapshots) => {
        const itemList = []
        snapshots.forEach((snapshot) => {
          const item = snapshot.data()
          itemList.push(item)
        })
        dispatch(fetchCoordinatesAction(itemList))
      })
  }
}

export const saveCoordinate = (
  id,
  season,
  tpo,
  superCoordinate,
  content,
  description,
  category,
  rating,
  gender,
  size,
  price,
  images
) => {
  return async (dispatch) => {
    const timestamp = FirebaseTimestamp.now()

    const data = {
      season: season,
      tpo: tpo,
      superCoordinate: superCoordinate,
      content: content,
      description: description,
      category: category,
      rating: rating,
      gender: gender,
      size: size,
      //文字列の数値を10進数に変える
      price: parseInt(price, 10),
      images: images,
      updated_at: timestamp,
    }

    if (id === '') {
      const ref = itemsRef.doc()
      id = ref.id
      data.id = id
      data.created_at = timestamp
    }
    //Firestoreにデータ保存
    return itemsRef
      .doc(id)
      .set(data, { merge: true })
      .then(() => {
        dispatch(push('/'))
      })
      .catch((error) => {
        throw new Error(error)
      })
  }
}

export const deleteCoordinate = (id) => {
  return async (dispatch, getState) => {
    itemsRef
      .doc(id)
      .delete()
      .then(() => {
        const prevCoordinates = getState().items.list
        const nextCoordinates = prevCoordinates.filter((product) => product.id !== id)
        dispatch(deleteCoordinateAction(nextCoordinates))
      })
  }
}
