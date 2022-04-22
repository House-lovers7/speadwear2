import { signInAction, signOutAction, signUpAction } from './actions'
import { push } from 'connected-react-router'
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
  const user = {
    email: email,
    password: password,
  }

  if (email === '' || password === '') {
    alert('必須入力項目です')
    return false
  }

  return (dispatch) => {
    dispatch(APIS.postBeginAction())
    return axios
      .post(URLS.signIn, user)
      .then((response) => {
        // props.handleSuccessfulAuthentication(response)
        dispatch(APIS.postSuccessAction(response))
        console.log(response)
        dispatch(
          signInAction({
            isSignedIn: true,
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

export const signOut = () => {
  return (dispatch) => {
    data = {}
    dispatch(APIS.postBeginAction())
    return axios
      .post(URLS.signOut, { data })
      .then((response) => {
        dispatch(APIS.postSuccessAction(response))
        console.log(response)
        dispatch(
          signInAction({
            isSignedIn: false,
            id: '',
            username: '',
            admin: '',
          })
        )
        dispatch(push('/users/singin'))
        return response
      })
      .catch((error) => {
        dispatch(APIS.postFailureAction(error))
        console.log(error)
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
