import { signInAction, signOutAction, signUpAction } from './actions'
import { push } from 'connected-react-router'
import { auth } from '../../firebase/index'
import { isValidEmailFormat, isValidRequiredInput } from '../../function/common'
import { hideLoadingAction, showLoadingAction } from '../loading/actions'
import axios from 'axios'
import axiosConverter from '../../function/axiosConverter'

import * as APIS from '../api/actions'
import * as URLS from '../../urls'

export const fetchAllUser = (userId) => {
  const data = {}
  return (dispatch) => {
    dispatch(APIS.fetchBeginAction())
    return axios
      .get(URLS.userIndex(userId), { data })
      .then((response) => {
        dispatch(APIS.fetchSuccessAction(response))
        console.log(response)
        // return response
        //showアクションのデータをもってくる
        dispatch(fetchUserAction(response.user))
      })
      .catch((error) => {
        dispatch(APIS.fetchFailureAction(error))
        console.log(error)
      })
  }
}

//paramsに渡す引数の数と順番を一致させる
export const signUp = (name, email, gender, password, passwordConfirmation) => {
  const user = {
    name: name,
    email: email,
    gender: gender,
    password: password,
    passwordConfirmation: passwordConfirmation,
  }

  if (name === '' || email === '' || password === '' || passwordConfirmation === '') {
    alert('必須入力項目です')
    return false
  }
  if (password !== passwordConfirmation) {
    alert('パスワードが一致しません、もう一度お試しください')
    return false
  }

  return (dispatch) => {
    dispatch(APIS.postBeginAction())
    return axios
      .post(URLS.signUp(), user, { credentials: true })
      .then((response) => {
        // props.handleSuccessfulAuthentication(response)
        dispatch(APIS.postSuccessAction(response))
        console.log(response)
        dispatch(
          signUpAction({
            isSignedIn: true,
            id: response.data.user.id,
            username: response.data.user.name,
            admin: response.data.user.admin,
          })
        )
        dispatch(push('/users/:id/items/:itemId'))
        return response
      })
      .catch((error) => {
        dispatch(APIS.postFailureAction(error))
        console.log(error)
      })
  }
}

export const signIn = (email, password) => {
  return async (dispatch) => {
    dispatch(showLoadingAction('Sign in...'))
    if (!isValidRequiredInput(email, password)) {
      dispatch(hideLoadingAction())
      alert('メールアドレスかパスワードが未入力です。')
      return false
    }
    if (!isValidEmailFormat(email)) {
      dispatch(hideLoadingAction())
      alert('メールアドレスの形式が不正です。')
      return false
    }
    return auth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        const userState = result.user
        if (!userState) {
          dispatch(hideLoadingAction())
          throw new Error('ユーザーIDを取得できません')
        }
        const userId = userState.userId

        return usersRef
          .doc(userId)
          .get()
          .then((snapshot) => {
            const data = snapshot.data()
            if (!data) {
              dispatch(hideLoadingAction())
              throw new Error('ユーザーデータが存在しません')
            }

            dispatch(
              signInAction({
                customer_id: data.customer_id ? data.customer_id : '',
                email: data.email,
                isSignedIn: true,
                role: data.role,
                payment_method_id: data.payment_method_id ? data.payment_method_id : '',
                userId: userId,
                username: data.username,
              })
            )

            dispatch(hideLoadingAction())
            dispatch(push('/'))
          })
      })
      .catch(() => {
        dispatch(hideLoadingAction())
      })
  }
}

export const signOut = () => {
  return async (dispatch, getState) => {
    dispatch(showLoadingAction('Sign out...'))
    const userId = getState().users.userId

    // Delete products from the user's cart
    await usersRef
      .doc(userId)
      .collection('cart')
      .get()
      .then((snapshots) => {
        snapshots.forEach((snapshot) => {
          usersRef.doc(userId).collection('cart').doc(snapshot.id).delete()
        })
      })

    // Sign out with Firebase Authentication
    auth
      .signOut()
      .then(() => {
        dispatch(signOutAction())
        dispatch(hideLoadingAction())
        dispatch(push('/signin'))
      })
      .catch(() => {
        dispatch(hideLoadingAction())
        throw new Error('ログアウトに失敗しました。')
      })
  }
}

export const resetPassword = (email) => {
  return async (dispatch) => {
    if (email === '') {
      alert('必須入力項目です')
      return false
    } else {
      auth
        .sendPasswordResetEmail(email)
        .then(() => {
          alert('入力されたアドレスにパスワードリセット用のメールをお送りしました')
          dispatch(push('/signin'))
        })
        .catch(() => {
          alert('パスワードリセットに失敗しました!!')
          dispatch(push('/signin'))
        })
    }
  }
}

export const deleteUser = (id) => {
  return (dispatch) => {
    dispatch(APIS.deleteBeginAction())
    return axios
      .delete(URLS.userIndex(id), { credentials: true })
      .then((response) => {
        dispatch(APIS.deleteSuccessAction(response))
        console.log(response)
        dispatch(deleteUserAction(response.status))
        console.log(response.status)
        return response.status
      })
      .catch((error) => {
        dispatch(APIS.deleteFailureAction(error))
        console.log(error)
      })
  }
}
