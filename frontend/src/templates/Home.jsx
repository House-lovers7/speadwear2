import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { getUserId, getUserName } from '../reducks/users/selectors'
import { signOut } from '../reducks/users/operations'
import SignIn from './SignIn'

const Home = (props) => {
  //selectorはstateをselectする
  const dispatch = useDispatch()
  const selector = useSelector((state) => state)
  const userId = getUserId(selector)
  const username = getUserName(selector)

  const handleSuccessfulAuthentication = (data) => {
    props.history.push('/dashboard')
  }

  return (
    <div>
      <p>ユーザーID：{userId}</p>
      <p>ユーザー名：{username}</p>
      <h2>ログイン状態: {props.loggedInStatus}</h2>
      <button onClick={() => dispatch(signOut())}>SIGN OUT</button>
      <SignIn handleSuccessfulAuthentication={handleSuccessfulAuthentication} />
    </div>
  )
}

export default Home
