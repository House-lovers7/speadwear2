import React, { useCallback, useState } from 'react'
import { PrimaryButton, SelectBox, TextInput } from '../components/UIkit'
import { useDispatch } from 'react-redux'
import { push } from 'connected-react-router'
import { signUp } from '../reducks/users/operations'
import { fetchUser } from '../reducks/users/operations'

const SignUp = () => {
  const dispatch = useDispatch()
  const [gender, setGender] = useState('')

  const genders = [
    { id: 'male', name: '男性' },
    { id: 'female', name: '女性' },
  ]

  const [username, setUsername] = useState(''),
    [email, setEmail] = useState(''),
    [password, setPassword] = useState(''),
    [passwordConfirmation, setPasswordConfirmation] = useState('')

  const inputUsername = useCallback(
    (event) => {
      setUsername(event.target.value)
    },
    [setUsername]
  )

  const inputEmail = useCallback(
    (event) => {
      setEmail(event.target.value)
    },
    [setEmail]
  )

  const inputPassword = useCallback(
    (event) => {
      setPassword(event.target.value)
    },
    [setPassword]
  )

  const inputPasswordConfirmation = useCallback(
    (event) => {
      setPasswordConfirmation(event.target.value)
    },
    [setPasswordConfirmation]
  )

  return (
    <div className="c-section-container">
      <h2 className="u-text__headline u-text-center">アカウント登録</h2>
      <div className="module-spacer--medium" />
      <TextInput
        fullWidth={true}
        label={'ユーザー名'}
        multiline={false}
        required={true}
        rows={1}
        value={username}
        type={'text'}
        onChange={inputUsername}
      />
      <TextInput
        fullWidth={true}
        label={'メールアドレス'}
        multiline={false}
        required={true}
        rows={1}
        value={email}
        type={'email'}
        onChange={inputEmail}
      />
      <SelectBox label={'性別'} options={genders} required={true} select={setGender} value={gender} />
      <TextInput
        fullWidth={true}
        label={'パスワード'}
        multiline={false}
        required={true}
        rows={1}
        value={password}
        type={'password'}
        onChange={inputPassword}
      />
      <TextInput
        fullWidth={true}
        label={'パスワード(再確認)'}
        multiline={false}
        required={true}
        rows={1}
        value={passwordConfirmation}
        type={'password'}
        onChange={inputPasswordConfirmation}
      />
      <div className="module-spacer--medium" />
      <div className="center">
        <PrimaryButton
          label={'アカウントを登録する'}
          onClick={() => dispatch(signUp(username, email, gender, password, passwordConfirmation))}
        />
      </div>
      <div className="module-spacer--medium" />
      <p onClick={() => dispatch(push('/signin'))}>アカウントをお持ちの方はこちら</p>
      <p onClick={() => dispatch(fetchUser(1, 1))}>バックエンドのAPI接続をためす</p>
    </div>
  )
}

export default SignUp
