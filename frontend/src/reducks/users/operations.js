import { signInAction, signOutAction, fetchUserAction } from './actions'
import { push } from 'connected-react-router'
import { auth, db, FirebaseTimestamp } from '../../firebase/index'
import { isValidEmailFormat, isValidRequiredInput } from '../../function/common'
import { hideLoadingAction, showLoadingAction } from '../loading/actions'
import axios from 'axios'

const usersRef = db.collection('users')

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

export const ListenAuthState = () => {
  return async (dispatch) => {
    return auth.onAuthStateChanged((user) => {
      if (user) {
        const uid = user.uid

        db.collection('users')
          .doc(uid)
          .get()
          .then((snapshot) => {
            const data = snapshot.data()

            dispatch(
              signInAction({
                isSignedIn: true,
                role: data.role,
                uid: uid,
                username: data.username,
              })
            )
          })
      } else {
        dispatch(push('/signin'))
      }
    })
  }
}

export const signUp = (username, email, password, confirmPassword) => {
  return async (dispatch) => {
    // Validations
    if (username === '' || email === '' || password === '' || confirmPassword === '') {
      alert('必須入力項目です')
      return false
    }
    if (password !== confirmPassword) {
      alert('パスワードが一致しません、もう一度お試しください')
      return false
    }

    return auth.createUserWithEmailAndPassword(email, password).then((result) => {
      const user = result.user

      if (user) {
        const uid = user.uid
        const timestamp = FirebaseTimestamp.now()

        const userInitialData = {
          created_at: timestamp,
          email: email,
          role: 'customer',
          uid: uid,
          updated_at: timestamp,
          username: username,
        }
        db.collection('users')
          .doc(uid)
          .set(userInitialData)
          .then(() => {
            dispatch(push('/'))
          })
      }
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
        const userId = userState.uid

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
                uid: userId,
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
    const uid = getState().users.uid

    // Delete products from the user's cart
    await usersRef
      .doc(uid)
      .collection('cart')
      .get()
      .then((snapshots) => {
        snapshots.forEach((snapshot) => {
          usersRef.doc(uid).collection('cart').doc(snapshot.id).delete()
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
