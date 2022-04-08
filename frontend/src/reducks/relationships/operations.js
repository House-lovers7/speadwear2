import { push } from 'connected-react-router'
import { hideLoadingAction, showLoadingAction } from '../loading/actions'
import axiosConverter from '../../function/axiosConverter'
import * as APIS from '../api/actions'
import * as URLS from '../../urls'

export const fetchAllFollower = (followerId) => {
  const data = {}
  return (dispatch) => {
    dispatch(APIS.fetchBeginAction())
    return axiosConverter
      .get(URLS.followerIndex(followerId), { data })
      .then((response) => {
        dispatch(APIS.fetchSuccessAction(response))
        console.log(response)
        // return response
        //showアクションのデータをもってくる
        dispatch(fetchFollowerAction(response.follower))
      })
      .catch((error) => {
        dispatch(APIS.fetchFailureAction(error))
        console.log(error)
      })
  }
}

//paramsに渡す引数の数と順番を一致させる
export const createFollower = (followername, email, gender, password, passwordConfirmation) => {
  const follower = {
    name: followername,
    email: email,
    gender: gender,
    password: password,
    passwordConfirmation: passwordConfirmation,
  }

  if (followername === '' || email === '' || password === '' || passwordConfirmation === '') {
    alert('必須入力項目です')
    return false
  }
  if (password !== passwordConfirmation) {
    alert('パスワードが一致しません、もう一度お試しください')
    return false
  }

  return (dispatch) => {
    dispatch(APIS.postBeginAction())
    return axiosConverter
      .post(URLS.signUp(), follower, { credentials: true })
      .then((response) => {
        // props.handleSuccessfulAuthentication(response)
        dispatch(APIS.postSuccessAction(response))
        console.log(response)
        dispatch(
          signUpAction({
            isSignedIn: true,
            id: response.data.follower.id,
            followername: response.data.follower.name,
            admin: response.data.follower.admin,
          })
        )
        dispatch(push(''))
        return response
      })
      .catch((error) => {
        dispatch(APIS.postFailureAction(error))
        console.log(error)
      })
  }
}
