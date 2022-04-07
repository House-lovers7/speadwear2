import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getIsSignedIn } from './reducks/users/selectors'
import { push } from 'connected-react-router'

const Auth = ({ children }) => {
  const selector = useSelector((state) => state)
  const isSignedIn = getIsSignedIn(selector)
  const dispatch = useDispatch()

  if (!isSignedIn) {
    return <p onClick={() => dispatch(push('/signin'))}>認証されてません。</p>
  } else {
    return children
  }
}

export default Auth
