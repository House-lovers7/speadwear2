import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getIsSignedIn } from './reducks/users/selectors'
import { push } from 'connected-react-router'
import { PrimaryButton } from './components/UIkit'

const Auth = ({ children }) => {
  const selector = useSelector((state) => state)
  const isSignedIn = getIsSignedIn(selector)
  const dispatch = useDispatch()

  if (!isSignedIn) {
    return (
      <div className="center">
        <p>認証されていません。</p>
        <div className="module-spacer--small" />
        <PrimaryButton label={'ログインする'} onClick={() => dispatch(push('/signin'))} />
      </div>
    )
  } else {
    return children
  }
}

export default Auth
