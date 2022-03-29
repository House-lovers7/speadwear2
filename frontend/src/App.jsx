import React, { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Router from './Router'
import './assets/reset.css'
import './assets/style.css'
import { Header } from './components/Header'

const App = () => {
  const [loggedInStatus, setLoggedInStatus] = useState('未ログイン')
  // const [user, setUser] = useState({})
  console.log(loggedInStatus)
  return (
    <BrowserRouter>
      <Header />
      <main className="c-main">
        <Router loggedInStatus={loggedInStatus} />
      </main>
    </BrowserRouter>
  )
}

export default App
